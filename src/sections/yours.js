import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaImagePortrait } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Yours() {
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
    <section id="yours" className="main-section centered animate fade-up">
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
        <a href="assets/resume.pdf">
        <FaImagePortrait size={30}/>
        </a>
      </div>
    </section>
  );
}

export default Yours;
