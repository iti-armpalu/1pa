"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About1PAPage() {
  return (
    <section className={styles.page}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        AI belongs to everyone
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We are here to break the gatekeepers, democratize intelligence, and put
        the power of AI in your hands. We believe AI should be a tool for
        augmentation, resilience, and personal growth, giving people the power
        to think bigger, create faster, and achieve more on their own terms.
      </motion.p>
    </section>
  );
}
