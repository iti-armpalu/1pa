"use client";

import Link from "next/link";
import styles from "./side-menu.module.css";
import ButtonSayHello from "./ui/buttons/button-say-hello";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SideMenu({ isOpen, onClose, navLinks }) {
  return (
    <aside
      className={`${styles.sideMenu} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.sideMenuContent}>
        <motion.nav
          className={styles.navLinks}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </motion.nav>
        <motion.div
          className={styles.sayHello}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ButtonSayHello hasBorder={true} />
        </motion.div>
      </div>
    </aside>
  );
}
