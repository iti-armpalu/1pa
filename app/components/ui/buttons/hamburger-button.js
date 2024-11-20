"use client";

import styles from "./hamburger-button.module.css";

export default function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      className={styles.hamburgerButton}
      onClick={onClick}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
    >
      <div className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}
