import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./header.module.css";

import SideNavigationBar from "./side-navigation-bar";

function useDelayUnmount(isOpen, delay) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isOpen && !shouldRender) {
      setShouldRender(true);
    } else if (!isOpen && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delay);
    }

    return () => clearTimeout(timeoutId);
  });

  return shouldRender;
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const ANIM_DURATION = 300;
  const shouldRender = useDelayUnmount(isOpen, ANIM_DURATION);

  console.log("outside", shouldRender);

  function toggleMounted() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.icon} ${isOpen ? styles.open : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {shouldRender && (
        <SideNavigationBar
          isOpen={isOpen}
          shoulRender={shouldRender}
          onClick={() => setIsOpen(isOpen)}
        />
      )}
      <div className={styles.logo}>
        <Link href="/">
          <h6>One Person Army</h6>
          {/* <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/random-logo-png-transparent.png"
                  alt="One Person Army logo"
                /> */}
        </Link>
      </div>
    </header>
  );
}

export default Header;
