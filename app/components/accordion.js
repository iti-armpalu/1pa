"use client";

import { useState, useEffect } from "react";
import styles from "./accordion.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const accordionItems = [
  { id: 1, title: "Coming Soon", link: "/" },
  { id: 2, title: "Resource Hub", link: "/resource-hub" },
  { id: 3, title: "Meet the People", link: "/meet-the-people" },
  { id: 4, title: "About 1 PA", link: "/about-1PA" },
];

export default function Accordion({ children }) {
  const pathname = usePathname(); // Get the current pathname
  const [expandedId, setExpandedId] = useState(1); // Default to item 1 expanded
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const activeElement = accordionItems.find((el) => el.link === pathname);
    if (activeElement) {
      setExpandedId(activeElement.id);
    }
    setLoading(false);
  }, [pathname]);

  const handleExpand = (id) => {
    if (expandedId !== id) {
      setTimeout(() => setExpandedId(id), 200); // Add a slight delay
    }
  };

  if (loading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.accordionContainer}>
      {accordionItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.accordionItem} ${
            expandedId === item.id ? styles.expanded : ""
          }`}
        >
          <Link
            href={item.link}
            className={styles.accordionTitle}
            onClick={() => handleExpand(item.id)}
            aria-expanded={expandedId === item.id}
            aria-controls={`accordion-content-${item.id}`}
          >
            {item.title}
          </Link>
          {expandedId === item.id && (
            <>
              <div className={styles.accordionContent}>{children}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
