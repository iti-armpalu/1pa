import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./header.module.css";

import SideNavigationBar from "./side-navigation-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import SayHelloPopup from "../ui/say-hello-popup";

function useDelayUnmount(isOpen, delay) {
  const [shouldRenderSideNav, setShouldRenderSideNav] = useState(false);
  const [shouldRenderPopup, setShouldRenderPopup] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isOpen && !shouldRenderSideNav) {
      setShouldRenderSideNav(true);
    } else if (!isOpen && shouldRenderSideNav) {
      timeoutId = setTimeout(() => setShouldRenderSideNav(false), delay);
    }

    return () => clearTimeout(timeoutId);
  });

  return shouldRenderSideNav;
}


function Header() {
  const [isOpen, setIsOpen] = useState(false);  
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const ANIM_DURATION = 300;
  const shouldRenderSideNav = useDelayUnmount(isOpen, ANIM_DURATION);
  const shouldRenderPopup = useDelayUnmount(isPopupOpen, ANIM_DURATION);

  console.log("outside", shouldRenderSideNav);
  console.log("outside too", shouldRenderPopup);

  return (
    <header className={styles.header}>
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-6">
            {/* Task: Create a separate component */}
            <div className={styles.logo}>
              <Link href="/">
                <h6>One Person Army</h6>
              </Link>
            </div>
          </div>
          <div className="col-6">

            {/* Task: Create a separate component */}
            <button
              onClick={() => setIsPopupOpen(!isPopupOpen)}
              className={` ${styles.btn} ${styles.btnS}` }>
              <FontAwesomeIcon icon={faPencil} className={styles.iconPencil} />
              <span className={styles.title}>Say Hello</span>
              <span className={styles.hover}>Say Hello</span>
            </button>
            {shouldRenderPopup && (
              <SayHelloPopup
                isPopupOpen={isPopupOpen}
                onClick={() => setIsPopupOpen(isPopupOpen)}
                onClose={() => setIsPopupOpen(!isPopupOpen)}
              />
            )}
          </div>

        </div>

      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.btnMenu} ${styles.icon} ${isOpen ? styles.open : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {shouldRenderSideNav && (
        <SideNavigationBar
          isOpen={isOpen}
          onClick={() => setIsOpen(isOpen)}
        />
      )}
     
    </header>
  );
}

export default Header;
