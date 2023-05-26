import styles from "./layout.module.css";
import Header from "./header";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { TypeAnimation } from "react-type-animation";
import NotifyPopup from "../ui/notify-popup";

import ModalVideo from 'react-modal-video'





function Layout(props) {
  const [isShowreelPopupOpen, setIsShowreelPopupOpen] = useState(false);
  const [isNotifyPopupOpen, setIsNotifyPopupOpen] = useState(false);
  // Set the open/closed states for horizontal accordion menu
  const [isOpen, setIsOpen] = useState({
    Expertise: true,
    Themes: false,
    People: false,
    Goods: false,
  });

 

  const handleClick = (navElement) => {
    setIsOpen({
      Expertise: false,
      Themes: false,
      People: false,
      Goods: false,
      [navElement]: !isOpen[navElement],
    });
  };

  const navElements = [
    {
      id: 1,
      name: "Featured Theme",
      pageName: "expertise",
    },
    {
      id: 2,
      name: "Discover Themes",
      pageName: "expertise",
    },
    {
      id: 3,
      name: "Meet the People",
      pageName: "people",
    },
    {
      id: 4,
      name: "Download templates",
      pageName: "goods",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.home}>
        <main className={styles.main}>
          <div className={`${styles.introContent} fullheight`}>
            <div className={styles.headline}>
              <span className={styles.headlineSubtitle}>
        
                <TypeAnimation
                  sequence={["Watch videos", 1000, "Listen podcast episodes", 1000, "Download templates", 1000]}
                  speed={20}
                  repeat={Infinity}
                />
              </span>
              <h1>Stay tuned for something awesome</h1>
              <div className={styles.headlineBtnHolder}>
                <a 
                // href="https://vimeo.com/65036292" 
                className={`${styles.btn} ${styles.btnPlay} ${styles.btnLight}`}
                onClick={() => setIsShowreelPopupOpen(!isShowreelPopupOpen)}>
                  <span>Play showreel</span>
                  <span className={styles.iconPlay}>
                    <FontAwesomeIcon icon={faPlay} className={styles.i}  />
                  </span>
                </a>
                {isShowreelPopupOpen && (
                  <ModalVideo 
                    
                    channel='youtube' 
                    isOpen={() => setIsShowreelPopupOpen(true)} 
                    videoId='mBo4oby7kjI' 
                    onClose={() => setIsShowreelPopupOpen(false)} />
                )}
                <a 
                className={`${styles.btn} ${styles.btnL} ${styles.btnOutlineLight}`}
                onClick={() => setIsNotifyPopupOpen(!isNotifyPopupOpen)}>
                  <span className={styles.btnTitle}>Notify Me</span>
                  <span className={styles.btnHover}>Notify Me</span>
                </a>
                {isNotifyPopupOpen && (
                <NotifyPopup
                  isNotifyPopupOpen={isNotifyPopupOpen}
                  onClose={() => setIsNotifyPopupOpen(!isNotifyPopupOpen)}
                />
              )}
              </div>
            </div>
          </div>

          {navElements.map((navElement) => (
            <div
              key={navElement.id}
              className={` ${styles.tab} ${isOpen ? styles.moveLeft : ""} `}
            >
              <Link href={`/${navElement.pageName}`} legacyBehavior>
                <a 
                  // onClick={() => handleClick(navElement.name)}
                >
                  <span>{navElement.name}</span>
                </a>
              </Link>
              {isOpen[navElement.name] && (
                <div className={` ${styles.content}`}>
                  <section className={styles.expertiseHero}>
                    {props.children}
                  </section>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Layout;
