import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaImagePortrait } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { motion, useInView } from 'framer-motion';
import resume from "../assets/resume.pdf";


const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0, 
    transition: { duration: 1, ease: "easeInOut" }
  },
};

function Yours() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  const copyButtonRef = useRef(null);
  const email = "adreysco@gmail.com";

  useEffect(() => {
    if (copyButtonRef.current) {
      copyButtonRef.current.addEventListener("click", () => {
        navigator.clipboard.writeText(email)
          .then(() => alert("Email copied to clipboard!"))
          .catch((err) => console.error("Failed to copy email: ", err));
      });
    }
  }, []);

  return (
    <motion.section id="yours" className="main-section centered animate fade-up"
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={sectionVariants}>
      <h2 className="highlight-first">Yours</h2>
      <hr />

      <div className="icon-wrapper">
        <button ref={copyButtonRef}>
        <IoIosMail size={35}/>
        </button>
        <a href="https://github.com/dreyso">
        <FaGithub size={30}/>
        </a>
        <a href="https://www.linkedin.com/in/adreyso">
        <FaLinkedin size={30}/>
        </a>
        <a href={resume}>
        <FaImagePortrait size={30}/>
        </a>
      </div>
    </motion.section>
  );
}

export default Yours;
