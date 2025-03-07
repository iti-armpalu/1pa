"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/app/components/ui/buttons/button";
import { useRouter } from "next/navigation";

export default function TheRationaleBehindTheEmpathyGradient() {
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
        src="/images/ijalfreak_A_flat_abstract_illustration_blending_modern_minimali_613aa933-33ea-4d42-a72a-3be93ef38a21.png"
        alt="The Rationale Behind the Empathy Gradient"
        width={800}
        height={450}
        className={styles.articleImage}
      />
      <h1 className={styles.title} ref={titleRef}>
        The Rationale Behind the Empathy Gradient
      </h1>
      <div className={styles.details}>
        <p className={styles.date}>September 8, 2024</p>
        <Button
          type="link"
          href="/articles-pdf/the-rationale-behind-the-empathy-gradient.pdf"
          download="the-rationale-behind-the-empathy-gradient"
        >
          Download PDF article
        </Button>
      </div>

      <div className={styles.content}>
        <h2>Understanding the Impact of AI on Work</h2>
        <p>
          The future of work in an AI-driven world is often difficult to predict
          due to the speculative nature of the question. However, a significant
          barrier to understanding AI’s impact is the flawed foundation of many
          current studies being circulated in reputable business publications
          such as the McKinsey Quarterly, Financial Times (FT), and Harvard
          Business Review (HBR). These studies frequently present skewed
          findings because they rely on outdated frameworks.
        </p>
        <h2>Misleading AI Studies: A Flawed Foundation</h2>
        <p>
          Take, for example, the McKinsey studies published in 2021, which aim
          to shed light on AI’s impact. The problem lies in the fact that their
          analysis is built on the McKinsey Global Institute (MGI) research from
          2017, which focuses on automation scenarios. These studies give undue
          weight to traditional optimization methods, arriving at conclusions
          similar to those of conventional cost-reduction models.
        </p>
        <p>
          Relevant quote: &quot;This research builds on MGI’s January 2017
          report on automation and its impact on work activities. We assess the
          number and types of jobs that might be created under different
          scenarios through 2030 and compare that to work that could be
          displaced by automation.&quot;
        </p>
        <p>
          Even the foundational studies quoted in such research can be
          problematic.
        </p>
        <h2>Task-Based Frameworks: Still Relevant, but in Need of Evolution</h2>
        <p>
          The foundational studies to all this work is the 2001 empirical study
          by Auto, Levy, and Murnane is based on the task-based framework that
          separates between “Routine” tasks and non-routine “Cognitive” tasks.
          Although this task categorisation is no longer relevant, it still
          serves as the foundation of the majority of works that are being
          quoted in the major publications that are read by senior leadership of
          large companies, like HBR and FT. The reason this task categorisation
          is no longer relevant should be obvious: AI is capable of performing
          cognitive tasks. The problem lies in finding an alternative for the
          model that can represent how tasks will get affected by AI.
        </p>
        <h2>Proposing a New Model: The Empathy Gradient</h2>
        <p>
          The model I propose brings us closer to solving that problem. I
          arrived at this model through an analysis of my work at a startup I
          founded where we were automating the optimisation of shopper marketing
          ads, usually a task reserved for creative talent and shopper marketing
          strategists. It was then evolved when trying to understand how to
          integrate data, tech, and then AI into the marketing supply chain and
          operating models.
        </p>
        <p>
          The starting point is understanding that AI has the potential to
          impact all tasks, cognitive and non-cognitive, since it combines the
          traditional automation capabilities of algorithms with evolved
          analytical capabilities, like recommendation engines, with generative
          capabilities, like Large Language Models and image generation models.
          This means that AI is not only automating, it is also “thinking” and
          “creating”.
        </p>
        <p>
          The next step is understanding that AI can replicate the majority of
          thinking and creative work, it just doesn’t do it as well as humans,
          for now. However, if the quality of the output is not important and
          the objective is e ciency of process with time or cost as the primary
          KPIs, then AI is either better than people or will become better than
          people over the coming years and decade. However, if we focus on the
          output, or more specifically, the outcome, then we find the source of
          the new model.
        </p>
        <h2>The Empathy Gradient: When Human Empathy Matters</h2>
        <p>
          There are tasks where the objective of the outcome is intrinsically
          human. Telling a joke, creating a work of art that resonates,
          identifying a human insight from data. Those outcome of tasks like
          those is improved by including a human because the outcome is
          dependant on human relatability. With that in mind, we take “Empathy”
          as a proxy for “being human” and can look at tasks in terms of whether
          empathy improves the outcomes or makes them worse.
        </p>
        <p>
          For example, when including empathy in data collection, we find that
          the data is biased and the outcome is worse. However, when translating
          that data to a human insight, empathy improves the outcome. This
          enables us to draft an x-axis gradient where we can use “Impact of
          Empathy” as the measure, which goes from negative empathy impact to
          positive empathy impact. Giving us the graph shown in Figure A.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/articles/the-rationale-behind-the-empathy-gradient/the-empathy-gradient-figure-A.jpg"
            alt=""
            width={800}
            height={450}
          />
          <span>Figure A</span>
        </div>

        <p>
          The second step is laying out the best use of AI on that gradient from
          People Augmentation for the tasks that benefit from empathy to Task
          Automation for the ones where empathy has a negative impact on the
          ouctome. The gradient overlay is shown in Figure B.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/articles/the-rationale-behind-the-empathy-gradient/the-empathy-gradient-figure-B.jpg"
            alt=""
            width={800}
            height={450}
          />
          <span>Figure B</span>
        </div>
        <p>
          We are now able to map tasks to the axis. Current mapping is
          qualitative based on subject matter expert opinions, but the goal is
          to create a quantitative process for the mapping. An example of mapped
          tasks can be seen in Figure C.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/articles/the-rationale-behind-the-empathy-gradient/the-empathy-gradient-figure-C.jpg"
            alt=""
            width={800}
            height={450}
          />
          <span>Figure C</span>
        </div>
        <p>
          One current use of this mapping is the design of AI-based applications
          that apply to the work within advertising agencies. The mapping helps
          us understand whether to develop an application with the objective of
          automating the task or developing it to augment the person performing
          the task.
        </p>
        <h2>Example 1: Augmenting Insight Generation</h2>
        <p>
          I’ve mapped insight generation to the &quot;High Empathy&quot; side
          because when interviewing strategists and talking to data and insights
          companies, the current consensus is that AI can show patterns, but a
          person can then understand how that pattern is a useful insight. One
          company that is doing a good job at augmenting people is Waldo.fyi, a
          tool that helps strategists and researchers make sense of massive
          amounts of data while performing their research. This is a prime
          example of human augmentation capabilities.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/articles/the-rationale-behind-the-empathy-gradient/example-1.png"
            alt=""
            width={800}
            height={450}
          />
          <span>Source: Waldo.fyi</span>
        </div>
        <h2>
          Example 2: Automation of Ad Evaluation Through and AI-Enabled App
        </h2>
        <p>
          This example demonstrates a fully automated ad evaluation system. The
          system analyzes the ad content and provides recommendations on how to
          improve its effectiveness, particularly in terms of making a stronger
          cognitive impact on the audience. By automating this process, the
          system helps optimize the ad’s performance without requiring human
          intervention for the evaluation.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/images/articles/the-rationale-behind-the-empathy-gradient/example-2.png"
            alt=""
            width={800}
            height={450}
          />
          <span>Contact me if you want to know more about this tool</span>
        </div>
        <p>
          Over time, I plan to evaluate a lot more of those tools and try to
          make sense of the insane number of tools out there that have the
          potential to augment us. I’ll keep you posted.
        </p>
      </div>
    </div>
  );
}
