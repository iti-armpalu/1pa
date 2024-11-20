"use client";

import { useFormStatus } from "react-dom";
import styles from "./submit-button.module.css";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
    className={`${styles.btn} ${pending ? styles.disabled : ""}`}
    disabled={pending}
  >
    {pending ? (
      "Sending..."
    ) : (
      <>
        <span className={styles.title}>Submit</span>
        <span className={styles.hover}>Submit</span>
      </>
    )}
  </button>
  );
}
