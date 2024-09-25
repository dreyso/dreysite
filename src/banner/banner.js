import React, { useEffect, useState, useRef } from "react";
import "./banner.css";
import NavToggle from "./navToggle";
import Nav from "./nav";

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

  // Highlight mobile nav tab that corresponds to the current page section
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
        Array.from(navRef.current.children).forEach(link => {
          link.classList.remove("active-nav-tab");
        });

        const activeLink = navRef.current.querySelector(`a[href="#${closestSection}"]`);
        if (activeLink) {
          activeLink.classList.add("active-nav-tab");
        }
      }
    };

    window.addEventListener("scroll", navHighlighter);
    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, [sectionIds]);

  return (
    <header id="banner" ref={bannerRef}>
      <a href="#">
        <img src="/logo.svg" id="logo" title="Andrey Steblyakov" alt="Andrey Steblyakov logo" />
      </a>
      <NavToggle menuVisible={menuVisible} onToggle={() => setMenuVisible(prev => !prev)} />
      <Nav sections={sections} ref={navRef} />
    </header>
  );
}

export default Banner;
