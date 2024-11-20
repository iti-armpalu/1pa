"use client";

import Link from "next/link";
import styles from "./side-menu.module.css";
import ButtonSayHello from "./ui/buttons/button-say-hello";

export default function SideMenu({ isOpen, onClose, navLinks }) {
  return (
    <aside className={`${styles.sideMenu} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.sideMenuContent}>
        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.sayHello}>
          <ButtonSayHello hasBorder={true} />
        </div>
      </div>
    </aside>
  );
}
