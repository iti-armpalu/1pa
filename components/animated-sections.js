import { useEffect, useRef } from "react";
import styles from "./animated-sections.module.css";
import { gsap } from "gsap/dist/gsap";
import { Observer } from "gsap/dist/Observer";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function AnimatedSections() {

  gsap.registerPlugin(ScrollTrigger)

  console.clear();
  const root = useRef();
  let callCount = 0;

  const component = useRef(null); // we only need a ref for the root-level element of this component so we can use selector text for everything else.
  const store = useRef(null)
  const trig = useRef(null)


  useEffect(() => {
    console.log(
      "useEffect() call",
      ++callCount,
      "(React 18 strict mode calls twice!)"
    );

    // create a context for all the GSAP animations and ScrollTriggers so we can revert() them in one fell swoop.
    // A context also lets us scope all the selector text to the component (like feeding selector text through component.querySelectorAll(...))
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      // gsap.from("h1", {
      //   // <- selector text, scoped to this component!
      //   opacity: 0,
      //   y: 100,
      //   ease: "power3",
      //   duration: 2,
      });

      let zoom = gsap.timeline({
        scrollTrigger: {
          trigger: trig.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true
        }
      })
      zoom.to(store.current, {
        scale: 3
      })







    // }, component); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // cleanup!
  }, []);


  return (
    <div id='' className='w-full bg'>
    <div id='longscroll' className='toReveal' ref={trig}></div>
    <div id={styles.intro} className='toMove'>
      <h1>Blah blah</h1>
      <h2>
        blah blah
      </h2>
    </div>
    <div className='container' ref={store}>
      <div id={styles.storebg} className='toMove'></div>

      <h1 id={styles.storename} className='toMove fancy-font'>
        blah blah
      </h1>
      <h2 id={styles.storesign} className='toMove fancy-font'>
        blaaaaaaaaaaaaaaaah
      </h2>
    </div>
  </div>
  );
}


//   return (
//     <div ref={root}>
//       <div ref={component}>
//       {/* <div ref={component}>
//         <h1>gsap.context() + React = 💚</h1>
//       </div> */}
//       <section className={styles.first} ref={sections}>
//         <div className={styles.outer} ref={outers}>
//           <div className={styles.inner}>
//             <div className={` ${styles.bg} ${styles.one}`} ref={images}>
//               <h2 className={styles.sectionHeading} ref={headings}>Scroll down</h2>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className={styles.second} ref={sections}>
//         <div className={styles.outer} ref={outers}>
//           <div className={styles.inner}>
//             <div className={styles.bg} ref={images}>
//               <h2 className={styles.sectionHeading} ref={headings}>Animated with GSAP</h2>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className={styles.third} ref={sections}>
//         <div className={styles.outer} ref={outers}>
//           <div className={styles.inner}>
//             <div className={styles.bg} ref={images}>
//               <h2 className={styles.sectionHeading} ref={headings}>GreenSock</h2>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className={styles.fourth} ref={sections}>
//         <div className={styles.outer} ref={outers}>
//           <div className={styles.inner}>
//             <div className={styles.bg} ref={images}>
//               <h2 className={styles.sectionHeading} ref={headings}>Animation platform</h2>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className={styles.fifth} ref={sections}>
//         <div className={styles.outer}>
//           <div className={styles.inner}>
//             <div className={styles.bg} ref={images}>
//               <h2 className={styles.sectionHeading} ref={headings}>Keep scrolling</h2>
//             </div>
//           </div>
//         </div>
//       </section>
//       </div>
//     </div>
//   );
// }

export default AnimatedSections;
