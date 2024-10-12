import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 3, ease: "easeInOut" },
  },
};

function Details() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="details" className="main-section centered" ref={ref}>
      <motion.h2
        className="highlight-first"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeVariants}
      >
        Details
      </motion.h2>
      <hr />
      <motion.ul
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeVariants}
      >
        <li>PSU | 2024 | summa cum laude</li>
        <li>Bachelors in Computer Science</li>
        <li>C | C++ | Python</li>
        <li>Web dev (React | Fask | SQL)</li>
        <li>Visual Studio | VS Code | Vim</li>
        <li>Native Russian speaker</li>
      </motion.ul>
    </section>
  );
}

export default Details;

