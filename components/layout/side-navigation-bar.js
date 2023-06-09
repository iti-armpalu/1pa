import Link from "next/link";

import styles from "./side-navigation-bar.module.css";

import NavItem from "./nav-item";
// import useLockBodyScroll from "../ui/use-lock-body-scroll";

function SideNavigationBar(props) {
  // useLockBodyScroll();

  const { isOpen } = props;

  const navElements = [
    {
      id: 1,
      name: "Featured Theme",
    },
    {
      id: 2,
      name: "Discover Themes",
    },
    {
      id: 3,
      name: "Meet the People",
    },
    {
      id: 4,
      name: "Download Templates",
    }
  ];

  return (
    <div
      className={`${styles.wrapper}  ${
        isOpen ? styles.fadeIn : styles.fadeOut
      }`}
    >
      <div className={styles.content}>
        <div>
          <div>
            <ul className={styles.navTabs}>
              {navElements.map((navElement) => (
                <NavItem key={navElement.id} navItem={navElement} />
              ))}
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default SideNavigationBar;
