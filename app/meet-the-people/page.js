"use client";

import { motion } from "framer-motion";
import ButtonNotify from "../components/ui/buttons/button-notify";
import styles from "./page.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MeetThePeoplePage() {
  return (
    <main className={styles.page}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Spotlight on Our Podcast Guests
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Get ready to connect with the incredible minds behind our podcast
        episodes. The Meet the People page will showcase bios and stories of
        our guests, giving you a closer look at their expertise, experiences,
        and insights.
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
