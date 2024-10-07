import headshot from "../assets/imgs/abode.webp"
import { motion } from 'framer-motion';

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

function Abode() {
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
        className="fade-down"
        alt="Author's headshot"
        initial="hidden"
        animate="visible"
        variants={imgVariants}
      />
      </div>
      <div className="lower-wrapper centered">
        <p>
          As a student, I chase the bounds of computing. As a veteran, I will
          push them further yet.
        </p>
      </div>
    </header>
  );
}

export default Abode;
