"use client";

import { useActionState } from "react";
import { useEffect, useRef, useState } from "react";
import { SubmitButton } from "../buttons/submit-button";
import styles from "./form-template.module.css";

export default function FormTemplate({ fields, onSubmit }) {
  const [formState, formAction] = useActionState(onSubmit, "");
  const formRef = useRef(null);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    if (formState?.success) {
      // Clear form fields
      if (formRef.current) {
        formRef.current.reset();
      }
      // Display success message
      setSubmitMessage(formState.message);
      // Clear message after 5 seconds
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <form ref={formRef} action={formAction} className={styles.form}>
      <div>
        {fields.map(({ name, type, placeholder, isTextarea }) => (
          <div key={name}>
            {isTextarea ? (
              <textarea
                name={name}
                placeholder={placeholder}
                required
              ></textarea>
            ) : (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                required
              />
            )}
            {formState.errors?.[name] && <span className={styles.error}>{formState.errors[name]}</span>}
          </div>
        ))}
      </div>
      <div>
        {!submitMessage && <SubmitButton />}
        {submitMessage && <p>{submitMessage}</p>}
      </div>
    </form>
  );
}
