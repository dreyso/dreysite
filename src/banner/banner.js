import React, { useEffect, useState, useRef } from "react";
import "./banner.css";
import NavToggle from "./navToggle";
import Nav from "./nav";
import { motion } from 'framer-motion';

const expandAnimation = {
  initial: { scale: 0, opacity: 0 },   // Starting state: scaled down and transparent
  animate: { scale: 1, opacity: 1 },   // Expanded state: full size and visible
  transition: {
    duration: 0.5,
    ease: "easeOut",
    scale: { duration: 1 },
    opacity: { duration: 1 },
  },
};
function Banner({ sections, sectionIds}) {
  const [menuVisible, setMenuVisible] = useState(false);
  const navRef = useRef(null);
  const bannerRef = useRef(null);

  // Mobile nav show/hide action
  useEffect(() => {
    navRef.current.style.top = `${bannerRef.current.offsetHeight}px`;
    navRef.current.style.right = menuVisible ? "0" : `-${navRef.current.offsetWidth}px`;

    const handleClickOutside = (event) => {
      if (menuVisible) setMenuVisible(false);
    };

    document.querySelector("main").addEventListener("click", handleClickOutside);

    return () => {
      document.querySelector("main").removeEventListener("click", handleClickOutside);
    };
  }, [menuVisible]);

  // Hide banner on scroll down, show on scroll up
  useEffect(() => {
    const banner = bannerRef.current;
    let ongoingTouch = false;
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (ongoingTouch) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      banner.style.top = scrollTop > lastScrollTop ? `-${banner.offsetHeight}px` : `0`;
      lastScrollTop = scrollTop;
    };

    const handleTouchStart = () => {
      ongoingTouch = true;
    };

    const handleTouchEnd = () => {
      ongoingTouch = false;
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <header id="banner" ref={bannerRef}>
      <motion.a 
      href="#"
      {...expandAnimation}
      whileHover={{ rotate: 25 }}>
        <img
          src="./logo.svg"
          id="logo"
          title="Andrey Steblyakov"
          alt="Andrey Steblyakov logo"
        />
      </motion.a>
      
      <motion.div {...expandAnimation}>
        <NavToggle menuVisible={menuVisible} onToggle={() => setMenuVisible(prev => !prev)} />
      </motion.div>

      <Nav sections={sections} sectionIds={sectionIds} ref={navRef} />
    </header>
  );
}

export default Banner;
