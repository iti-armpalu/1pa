'use client';

import { useRouter } from 'next/navigation';
import styles from './button.module.css';

export default function Button({ type, href, onClick, children, download }) {
  const router = useRouter();

  // Handle the click action
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (type === 'link') {
    return (
      <a
        href={href}
        download={download} // Only add download if it's provided
        className={`${styles.btn} ${styles.btnBorder}`}
      >
        <span className={styles.title}>{children}</span>
        <span className={styles.hover}>{children}</span>
      </a>
    );
  } else {
    return (
      <button
        className={`${styles.btn} ${styles.btnBorder}`}
        onClick={handleClick}
      >
        <span className={styles.title}>{children}</span>
        <span className={styles.hover}>{children}</span>
      </button>
    );
  }
}
