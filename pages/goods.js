import { Fragment, useEffect, useRef, useState } from 'react';
import Head from 'next/head';

import styles from "./goods.module.css";

function GoodsPage() {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollPosition = container.scrollTop;
    // Perform actions based on the scroll position
    console.log('Scroll position:', scrollPosition);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <div className={styles.scrollContainer} ref={containerRef}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}></div>
      </div>
      <div className={styles.scrollContent}>
        <div className={styles.scrollItem}>Item 1</div>
        <div className={styles.scrollItem}>Item 2</div>
        <div className={styles.scrollItem}>Item 3</div>
      </div>
    </div>
    </Fragment>
  );
}

export default GoodsPage;