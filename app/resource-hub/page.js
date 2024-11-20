"use client";

import { motion } from "framer-motion";
import ButtonNotify from "../components/ui/buttons/button-notify";
import styles from "./page.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ResourceHubPage() {
  return (
    <main className={styles.page}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Explore the 1PA Resource Hub
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        The 1PA Resource Hub is on its way! Soon, you’ll have access to a
        comprehensive library of tools, guides, and insights designed to empower
        you in navigating the world of ethical AI and innovation. Stay tuned!
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <ButtonNotify />
      </motion.div>
    </main>
  );
}
