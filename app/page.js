"use client";

import { motion } from "framer-motion";
import ButtonNotify from "./components/ui/buttons/button-notify";
import styles from "./page.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className={styles.page}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        1PA is launching soon with tools, insights, and strategies to help you
        thrive independently in an AI-driven world.
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Stay tuned for resources, templates, and expert guidance that balance
        innovation with humanity. The future of solo success is almost here—are
        you ready?
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
