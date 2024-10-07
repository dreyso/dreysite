import headshot from "../assets/imgs/abode.webp";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const headerVariants = {
  hidden: { opacity: 0, y: -100 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" } 
  },
};

const imgVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0, 
    transition: { duration: 1, ease: "easeInOut" }
  },
};

const pVariants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)", // Fully masked from the right
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)", // Revealed completely
    transition: { duration: 1, ease: "easeInOut" }
  },
};

function Abode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  return (
    <header id="abode" className="main-section">
      <div className="upper-wrapper centered">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          Hi, <br />
          I'm <span className="highlight">Andrey</span>
        </motion.h1>
        <motion.img
          src={headshot}
          width="1812"
          height="2500"
          alt="Author's headshot"
          initial="hidden"
          animate="visible"
          variants={imgVariants}
        />
      </div>
      <div className="lower-wrapper centered">
        <motion.p
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={pVariants}
        >
          As a student, I chase the bounds of computing. As a veteran, I will
          push them further yet.
        </motion.p>
      </div>
    </header>
  );
}

export default Abode;
