import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import Image from "next/image";
import Link from "next/link";
import styles from "./resource-grid.module.css";
import ArrowOpenIcon from "../../public/icons/arrow-open.svg";

gsap.registerPlugin(Flip);

const resources = [
  {
    id: 1,
    title: "The Rationale Behind the Empathy Gradient",
    date: "March 5, 2025",
    image:
      "/images/ijalfreak_A_flat_abstract_illustration_blending_modern_minimali_613aa933-33ea-4d42-a72a-3be93ef38a21.png",
    link: "/resources/ai-for-entrepreneurs",
    format: "Article",
  },
  {
    id: 2,
    title: "Why AI Will Probably Make You Less Productive",
    date: "February 20, 2025",
    image:
      "/images/ijalfreak_A_flat_abstract_illustration_blending_modern_minimali_0e2368dd-f63d-4d39-96bf-587a10b34d18.png",
    link: "/resources/empathy-gradient",
    format: "Article",
  },
];

export default function ResourceGrid() {
  const [isListView, setIsListView] = useState(false); // Default state can be false
  const [selectedFormat, setSelectedFormat] = useState(null);

  const containerRef = useRef(null);

  const imagesRef = useRef([]); // Store image elements separately
  const titlesRef = useRef([]);
  const datesRef = useRef([]);
  const formatRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Ensure all images are properly captured
    imagesRef.current = gsap.utils.toArray(
      containerRef.current.querySelectorAll("img")
    );
    titlesRef.current = gsap.utils.toArray(
      containerRef.current.querySelectorAll(`.${styles.resourceTitle}`)
    );
    datesRef.current = gsap.utils.toArray(
      containerRef.current.querySelectorAll(`.${styles.date}`)
    );
    datesRef.current = gsap.utils.toArray(
      containerRef.current.querySelectorAll(`.${styles.formatButton}`)
    );

    console.log("Captured Images:", imagesRef.current); // Debugging
    console.log("Captured Titles:", titlesRef.current);
  }, [isListView]); // Runs every time the layout changes

  const toggleView = () => {
    if (!containerRef.current) return;

    // GSAP Flip works by storing the positions, sizes, and other styles of the elements before they move. Flip.getState(images) takes a snapshot of the current positions of all images. This step is crucial because it tells GSAP where elements were before the layout change.
    const state = Flip.getState([
      ...imagesRef.current,
      ...titlesRef.current,
      ...datesRef.current,
      ...formatRef.current,
    ]);

    console.log("Flip Initial State:", state);

    // Calls setIsListView((prev) => !prev); What does this do? If isListView is false, it becomes true → The layout switches to list view. If isListView is true, it becomes false → The layout switches back to grid view. This triggers a React re-render, which updates the layout.
    setIsListView((prev) => !prev);

    // Uses gsap.delayedCall(0.1, callbackFunction) Why delay? React’s state update is asynchronous → The layout change may not be fully applied when Flip starts. This ensures the DOM updates before the animation runs.
    // gsap.delayedCall(0.1, () => {
    requestAnimationFrame(() => {
      // Flip.from(state, {...}) tells GSAP to animate from the old state to the new state. Animation properties explained: duration: 0.6 → The animation lasts 0.6 seconds. scale: true → Images scale up/down smoothly if their size changes. stagger: 0.1 → Each image starts 0.1 seconds after the previous one. ease: "power2.inOut" → Uses a smooth easing to make the transition feel natural.
      Flip.from(state, {
        duration: 0.6,
        scale: true,
        // stagger: 0.1,
        ease: "power2.inOut",
      });
    });
  };

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Resource Hub</h1>
        <button onClick={toggleView} className={styles.toggleButton}>
          Change View
        </button>
      </div>
      <div
        ref={containerRef}
        className={`${styles.grid} ${isListView ? styles.listView : ""}`}
      >
        {resources.map((resource) => (
          <Link key={resource.id} href={resource.link} className={styles.card}>
            <Image
              src={resource.image}
              alt={resource.title}
              width={isListView ? 178 : 446}
              height={isListView ? 100 : 250}
              className={styles.image}
            />
            <div>
              <h2 className={styles.resourceTitle}>{resource.title}</h2>
              <p className={styles.date}>{resource.date}</p>
            </div>

            <button className={styles.formatButton}>{resource.format}</button>

            <div className={styles.arrow}>
              <Image
                src={ArrowOpenIcon}
                alt="Arrow Open Icon"
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
