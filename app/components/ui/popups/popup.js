"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./popup.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Popup({
  isPopupOpen,
  onClose,
  title,
  description,
  children,
}) {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContainer}>
        <div
          className={`${styles.content} ${styles.rounded} ${
            isPopupOpen ? styles.animateIn : styles.animateOut
          }`}
        >
          <button className={styles.close} onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className={styles.title}>
            <motion.h6
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {title}
            </motion.h6>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {description}
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
