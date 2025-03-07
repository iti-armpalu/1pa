"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/app/components/ui/buttons/button";
import { useRouter } from "next/navigation";

export default function WhyAiWIllProbablyMakeYouLessProductive() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    gsap.fromTo(
      containerRef.current.children, // target all child elements
      { opacity: 0, y: 50 }, // initial state
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.2 } // final state with stagger
    );
  }, [isLoaded]);

  return (
    <div ref={containerRef} className={styles.articleContainer}>
      <div>
        <Button type="button" onClick={() => router.push("/resource-hub")}>
          Back to Resource Hub
        </Button>
      </div>
      <Image
        src="/images/ijalfreak_A_flat_abstract_illustration_blending_modern_minimali_0e2368dd-f63d-4d39-96bf-587a10b34d18.png"
        alt=" Why AI Will Probably Make You Less Productive (At First...)"
        width={800}
        height={450}
        className={styles.articleImage}
      />
      <h1 className={styles.title} ref={titleRef}>
        Why AI Will Probably Make You Less Productive (At First...)
      </h1>
      <div className={styles.details}>
        <p className={styles.date}>February 20, 2025</p>
        <Button
          type="link"
          href="/articles-pdf/why-ai-will-probably-make-you-less-productive.pdf"
          download="why-ai-will-probably-make-you-less-productive"
        >
          Download PDF article
        </Button>
      </div>
      <div className={styles.content}>
        <p>
          Last month, I wrote about the Empathy Gradient, and while it resonated
          with quite a few people, I wasn&rsquo;t able to make the full point in that
          one article. So, I&rsquo;m going to expand on it through a few more,
          starting with this one, explaining how a new technology like AI will
          probably make you less productive before it makes you better. The link
          to the gradient will become clear in a few minutes.
        </p>

        <p>
          We tend to forget that new technology is great, but the way it gets
          adopted is where the real impact begins. The problem is that we rush
          into embedding tech into our lives without really thinking about it
          and end up getting frustrated. This is normal and even has a name and
          graph: the Productivity J-Curve. Before explaining it, let&rsquo;s look at
          technology we now take for granted: electricity.
        </p>
        <p>
          When electricity started to get harnessed, it was a huge change that
          took more than 70 years for households and 40&ndash;50 years for factories.
          I&rsquo;m going to talk about that gap separately when I write about the
          impact of new technology on income inequality, but I want to focus on
          productivity today, so I will use factories as an example. When
          factories started electrifying machinery, they just swapped out the
          old tech, steam, with the new tech, electricity, but they didn&rsquo;t
          change the way people worked and still had the layout of the factory
          based on steam power. Think of the difference between a factory that
          needs a steam engine in one section—where coal is used to produce
          steam —and then the whole factory is built to harness that steam
          through pulleys and large machines. Take a look at the pictures and
          imagine what it must have felt like to work there.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/articles/why-ai-will-probably-make-you-less-productive/factories.jpg"
            alt=""
            width={800}
            height={450}
          />
          <span>
            The left image shows a typical early 1900s factory using belt-driven
            machinery, while the right image depicts an 1880s steam-powered
            factory.
          </span>
        </div>

        <p>
          Now, picture what happens when you replace the steam engine with
          electricity but keep everything else the same. Nothing changes,
          productivity doesn&rsquo;t just stay the same, it becomes worse. Electricity
          was meant to “change everything” (and we know that eventually, it
          did). The problem is that, in the beginning, it didn&rsquo;t. Since the
          factories were designed for steam, simply replacing the power source
          didn&rsquo;t have much of an effect.
        </p>

        <p>
          It wasn&rsquo;t until the factories were redesigned—taking advantage of the
          decentralized power of electricity—that we saw an uplift in
          productivity.
        </p>

        <p>
          A great example is how Henry Ford changed the factory layout to an
          assembly line. He couldn&rsquo;t have done it with the constraints of steam
          power. The first step was placing machines where needed, and the
          second step was introducing the moving assembly line through conveyor
          belts. Now the cars would move past the workers as they performed
          their tasks, cutting production time from 12 hours to 90 minutes. Take
          a look at the picture below and compare it to the steam factory.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/articles/why-ai-will-probably-make-you-less-productive/steam-factory.png"
            alt=""
            width={800}
            height={450}
          />
          <span>An assembly line of the Ford Motor Company.</span>
        </div>
        <p>
          Now think of yourself as a factory. Before AI, you needed to get coal
          (data) and turn it into steam (knowledge and insight) before
          performing a task. If you try to apply AI to your work without
          changing the way that you work, it will be like adding electricity to
          a steam factory. You will get less productive unless you do what Henry
          Ford did and remap your way of working with the new technology in
          mind.
        </p>
        <p>
          That&rsquo;s exactly what the J-Curve shows o At first, AI might slow you
          down as you figure out how to use AIh o If you keep working the same
          way, you won&rsquo;t see much improvementh o But if you redesign the way you
          work with AI in mind, you&rsquo;ll get the benefits and augment yourself.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/articles/why-ai-will-probably-make-you-less-productive/j-curve-1.jpg"
            alt=""
            width={800}
            height={450}
          />
          <span>J-curve effect.</span>
        </div>

        <p>
          However, if you apply a new way of working with AI in mind—a way to
          map your tasks, like the Empathy Gradient (you can find it here: The
          Rationale Behind the Empathy Gradient)—you might be able to reach
          productivity faster, as shown in the second graph with the added part.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/articles/why-ai-will-probably-make-you-less-productive/j-curve-2.jpg"
            alt=""
            width={800}
            height={450}
          />
          <span>
            J-curve effect reduced by a framework to help change the way you
            work.
          </span>
        </div>

        <p>
          Now, I&rsquo;m obviously biased toward a framework I wrote and my teams use,
          but the important part isn't necessarily applying the Empathy
          Gradient. The important part is to rethink the way that you work with
          AI in mind and move from being a steam-powered factory to an electric
          one.
        </p>

        <p>
          The second step is laying out the best use of AI on that gradient from
          People Augmentation for the tasks that benefit from empathy to Task
          Automation for the ones where empathy has a negative impact on the
          ouctome. The gradient overlay is shown in Figure B.
        </p>

        <p>
          We are now able to map tasks to the axis. Current mapping is
          qualitative based on subject matter expert opinions, but the goal is
          to create a quantitative process for the mapping. An example of mapped
          tasks can be seen in Figure C.
        </p>
        <p>
          With that in mind, the next article will look at how new technologies
          like electricity and probably now AI have historically increased
          income inequality partly due to this J-Curve —and what that means for
          you.
        </p>
        <p>
          Until then, think about how you&rsquo;re taking the right steps to adopt
          this major change that seems to be in every conversation ad nauseam.
        </p>
      </div>
    </div>
  );
}
