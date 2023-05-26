import { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";

import styles from "./expertise.module.css";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import VerticalNavigation from "@/components/layout/vertical-navigation";

function ExpertisePage() {
  const sections = useRef([]);
  const containerRef = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const [activeSection, setActiveSection] = useState(null);
  const [active, setActive] = useState(false);

  // Get active sectiosn as user scrolls through the page
  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;

    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
    console.log("hello");
  };

  // Get all the sections elements available
  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle vertical dot navigation clicks and add className based on active section
  const handleClick = (id) => {
    console.log(`hello ${id}`);
    setActive(id);
  };

  const scrollElements = [
    {
      id: 1,
      name: "Home",
      section: "section1",
    },
    {
      id: 2,
      name: "Hello",
      section: "section2",
    },
    {
      id: 3,
      name: "World",
      section: "section3",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Expertise</title>
        <meta name="description" content="Send me your messages!" />
      </Head>

      <div className={styles.expertiseContainer} ref={containerRef}>
        <ul className={styles.indicators}>
          {scrollElements.map((scrollElement) => (
            <VerticalNavigation
              key={scrollElement.id}
              scrollElement={scrollElement}
              isActive={active === scrollElement.id}
              activeSection={activeSection}
              handleClick={handleClick}
            />
          ))}
        </ul>

        <section
          data-section
          id="section1"
          ref={section1}
          className={styles.section}
          data-label="home"
          style={{ backgroundColor: "white" }}
        >
          <h1>Home</h1>
        </section>
        <section
          data-section
          id="section2"
          className={styles.section}
          data-label="hello"
          style={{ backgroundColor: "blueviolet" }}
        >
          <h1>Hello</h1>
        </section>

        <section
          data-section
          id="section3"
          ref={section3}
          className={styles.section}
          data-label="world"
          style={{ backgroundColor: "cornflowerblue" }}
        >
        <h1>World</h1>
        </section>

        <footer className={styles.footer}>One Person Army</footer>
      </div>
    </Fragment>
  );
}

export default ExpertisePage;
