import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { CSSPlugin } from 'gsap/CSSPlugin'
// gsap.registerPlugin(CSSPlugin)
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

import styles from "./vertical-scroll.module.css";

function VerticalScroll() {
  const root = useRef();
  const boxRef = useRef();
  const section0 = useRef();
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  useLayoutEffect(() => {
//     const navLinks = gsap.utils.toArray(".section_nav a");
// navLinks.forEach((link, i) => {
//   link.addEventListener("click", e => {
//     e.preventDefault();
//     gsap.to(window, {scrollTo: i * innerHeight});
//   });
// });

// const panels = gsap.utils.toArray(".panel");
// panels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     start: 0,
//     end: (i + 1) * innerHeight - innerHeight / 2,
//     markers: true,
//     onLeave: () => {
//       if(navLinks[i + 1]) {
//         gsap.to(navLinks[i + 1], {scale: 1.3, color: "white"});
//         gsap.to(navLinks[i], {scale: 1, color: "blue"});
//       }
//     }, 
//     onEnterBack: () => {
//       gsap.to(navLinks[i], {scale: 1.3, color: "white"});
//       if(navLinks[i + 1]) {
//         gsap.to(navLinks[i + 1], {scale: 1, color: "blue"});
//       }
//     }, 
//   })
// });



    let ctx = gsap.context(() => {
      gsap.to(boxRef.current, { rotation: "+=360" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.page} ref={root}>
      <h1>Home Page</h1>
      <section className={`${styles.description} ${styles.panel} ${styles.blue}`}>
        <div>
          <h1>Nav links change on scroll</h1>
          <div className={styles.box} ref={boxRef}>
            Home
          </div>
          <div class="scroll-down">
            Scroll down<div class="arrow"></div>
          </div>
        </div>
      </section>
      <section id="section-0" ref={section0} className={`${styles.panel} ${styles.red}`}>
        ONE
      </section>
      <section id="section-1" ref={section1} className={`${styles.panel} ${styles.orange}`}>
        TWO
      </section>
      <section ref={section2} className={`${styles.panel} ${styles.purple}`}>
        THREE
      </section>
      <section ref={section3} className={`${styles.panel} ${styles.green}`}>
        FOUR
      </section>

      <ul className={styles.indicators}>
        <li className={styles.indicator}>
        `<Link href="/#section0" scroll={false}>
            00
          </Link>
        </li>
        <li className={styles.indicator}>
          <Link href="#section1" scroll={false}>
            <span>01</span>
          </Link>
        </li>
        <li className={styles.indicator}>
          <Link href="#section2">
            <span>02</span>
          </Link>
        </li>
        <li className={styles.indicator}>
          <Link href="#section3">
            <span>03</span>
          </Link>
        </li>
        <li className={styles.indicator}>
          <Link href="#section4">
            <span>04</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default VerticalScroll;
