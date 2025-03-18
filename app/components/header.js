"use client";

import Link from "next/link";
import styles from "./header.module.css";
import ButtonSayHello from "./ui/buttons/button-say-hello";
import { useState } from "react";
import useMediaQuery from "./helpers/useMediaQuery";
import HamburgerButton from "./ui/buttons/hamburger-button";
import SideMenu from "./side-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resource-hub", label: "Resource Hub" },
  { href: "/meet-the-people", label: "Meet the People" },
  { href: "/about-1PA", label: "About 1PA" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect medium and larger screens
  const isMediumOrLarger = useMediaQuery("(min-width: 768px)");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <h6>1PA</h6>
          </Link>
        </div>
        {isMediumOrLarger ? (
          <ButtonSayHello />
        ) : (
          <HamburgerButton isOpen={menuOpen} onClick={toggleMenu} />
        )}
      </header>
      <SideMenu isOpen={menuOpen} onClose={closeMenu} navLinks={navLinks} />
    </>
  );
}
