"use client";

import { Fragment, useState } from "react";
import { useDelayUnmount } from "../../helpers/use-delay-unmount";
import styles from "./button-popup.module.css";

export default function ButtonPopup({ buttonText, PopupComponent, hasBorder }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const ANIM_DURATION = 300;
  const shouldRenderPopup = useDelayUnmount(isPopupOpen, ANIM_DURATION);

  const togglePopup = () => setIsPopupOpen((prev) => !prev);

  return (
    <Fragment>
      <button
        onClick={togglePopup}
        className={`${styles.btn} ${hasBorder ? styles.btnBorder : ""}`}
      >
        <span className={styles.title}>{buttonText}</span>
        <span className={styles.hover}>{buttonText}</span>
      </button>
      {shouldRenderPopup && (
        <PopupComponent isPopupOpen={isPopupOpen} onClose={togglePopup} />
      )}
    </Fragment>
  );
}