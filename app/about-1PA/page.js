"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About1PAPage() {
  return (
    <section className={styles.page}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Your Guide to Navigating the AI-Driven World Responsibly
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We’re at a pivotal moment in how technology shapes our lives. AI and
        automation are transforming nearly every aspect of work, connection, and
        decision-making, bringing tremendous potential but also complex
        challenges. At 1PA, which stands for “One Person Army,” we believe
        everyone can take control of their relationship with AI, turning
        confusion into confidence and uncertainty into purposeful action.
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Our Mission
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Our mission is to empower individuals and organizations to approach AI
        ethically, responsibly, and with a human-centered focus. We provide the
        knowledge, resources, and frameworks needed to navigate AI in a way that
        enhances human strengths and preserves our values.
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        What Makes us Different
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1 }}
      >
        At 1PA, we don’t just talk about responsible AI—we give you practical
        tools to make it a reality. Our exclusive Empathy Gradient framework
        helps users understand when human insight is essential and when
        automation can be effective, ensuring AI serves humanity rather than
        overshadowing it. We’re here to help everyone, no matter their
        background, feel equipped and empowered to integrate AI in ways that are
        balanced, thoughtful, and impactful.
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Our Core Resources
      </motion.h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }, // Stagger each list item's animation
        }}
      >
        {[
          {
            title: "In-Depth Articles:",
            description:
              "Stay informed with insights on the latest challenges, best practices, and trends in ethical AI and responsible automation.",
          },
          {
            title: "Tools and Framework Reviews:",
            description:
              "Find expert perspectives on the best tools for responsible AI, so you can make informed decisions with confidence.",
          },
          {
            title: "Step-by-Step Tutorials:",
            description:
              "Our tutorials bridge theory and practice, guiding you through the ethical, human-centered application of AI.",
          },
          {
            title: "Downloadable Templates:",
            description:
              "Implement responsible AI practices with ready-made templates, making it easy to apply our principles in your own context.",
          },
          {
            title: "Video Podcasts with Experts:",
            description:
              "Join leading voices in AI ethics and technology for real conversations on creating a balanced, future-ready approach to AI.",
          },
        ].map((item, index) => (
          <motion.li
            key={index}
            variants={fadeInUp} // Reuse fadeInUp animation for each list item
            transition={{ duration: 0.5 }}
          >
            <strong>{item.title}</strong> {item.description}
          </motion.li>
        ))}
      </motion.ul>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        A Movement for Responsible AI
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        1PA is more than a brand—it’s a community of individuals and
        organizations committed to responsible AI. Together, we’re building a
        future where AI and technology are used with empathy, purpose, and
        integrity. By joining 1PA, you’re not just learning to navigate an
        AI-driven world; you’re shaping it.
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Our Vision for the Future
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We envision a world where AI complements human strengths and honors our
        need for connection, empathy, and ethical consideration. With 1PA, we’re
        here to guide you on this journey, empowering you to become a “One
        Person Army” in the pursuit of balanced, ethical AI.
      </motion.p>
    </section>
  );
}
