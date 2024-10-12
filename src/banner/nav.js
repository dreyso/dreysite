import React, { useEffect } from "react";
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.3 }
  }),
};

const Nav = React.forwardRef(({ sections, sectionIds }, ref) => {
  
  // Handle smooth scrolling
  const handleScroll = (event, section) => {
    event.preventDefault();
    const targetSection = document.getElementById(section.toLowerCase());

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Highlight mobile nav tab that corresponds to the current page section when scrolling
  useEffect(() => {
    const navHighlighter = () => {
      let closestSection = null;
      let smallestDifference = Infinity;

      sectionIds.forEach(sectionId => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const difference = Math.abs(window.scrollY - sectionTop);

          if (difference < smallestDifference) {
            smallestDifference = difference;
            closestSection = sectionId;
          }
        }
      });

      if (closestSection) {
        Array.from(ref.current.children).forEach(link => {
          link.classList.remove("active-nav-tab");
        });

        const activeLink = ref.current.querySelector(`a[href="#${closestSection}"]`);
        if (activeLink) {
          activeLink.classList.add("active-nav-tab");
        }
      }
    };

    // Set first section active by default
    const firstLink = ref.current.children[0];
    firstLink.classList.add("active-nav-tab");

    window.addEventListener("scroll", navHighlighter);
    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, [sectionIds, ref]);

  return (
    <nav ref={ref} id="nav-menu">
      {sections.map((section, index) => (
        <motion.a
          href={`#${section.toLowerCase()}`}
          className="highlight-first"
          key={section}
          variants={navVariants}
          initial="hidden"
          animate="visible"
          custom={index} // Pass the index for delay calculation
          onClick={(e) => handleScroll(e, section)} // Smooth scroll
        >
          {section}
        </motion.a>
      ))}
    </nav>
  );
});

export default Nav;
