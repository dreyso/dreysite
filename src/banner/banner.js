import React, { useEffect, useState, useRef } from "react";
import "./banner.css";
import MobileMenuToggle from "./mobileMenuToggle";
import Navigation from "./navigation";

function Banner() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navRef = useRef(null);
  const bannerRef = useRef(null);
  const sections = ["Abode", "Narrative", "Details", "Records", "Endeavors", "Yours"];

  useEffect(() => {
    const setMenuPos = () => {
      if (navRef.current) {
        navRef.current.style.right = menuVisible ? "0" : `-${navRef.current.offsetWidth}px`;
        navRef.current.style.top = `${bannerRef.current.offsetHeight}px`;
      }
    };
    
    setMenuPos();

    const handleClickOutside = (event) => {
      if (menuVisible) setMenuVisible(false);
    };

    document.querySelector("main").addEventListener("click", handleClickOutside);

    return () => {
      document.querySelector("main").removeEventListener("click", handleClickOutside);
    };
  }, [menuVisible]);

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

  useEffect(() => {
    const sections = document.querySelectorAll(".main-section"); 
    
    const navHighlighter = () => {
      let closestSection = null;
      let smallestDifference = Infinity;
  
      sections.forEach(current => {
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute("id");
        const difference = Math.abs(window.scrollY - sectionTop);
  
        if (difference < smallestDifference) {
          smallestDifference = difference;
          closestSection = sectionId;
        }
      });
  
      if (closestSection) {
        document.querySelectorAll("#nav-menu a").forEach(link => {
          link.classList.remove("active-bookmark");
        });
  
        const activeLink = document.querySelector(`#nav-menu a[href="#${closestSection}"]`);
        if (activeLink) {
          activeLink.classList.add("active-bookmark");
        }
      }
    };
  
    window.addEventListener("scroll", navHighlighter);
  
    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, []);

  return (
    <header id="banner" ref={bannerRef}>
      <a href="#">
        <img src="/logo.svg" id="logo" title="Andrey Steblyakov" alt="Andrey Steblyakov logo" />
      </a>
      <MobileMenuToggle menuVisible={menuVisible} onToggle={() => setMenuVisible(prev => !prev)} />
      <Navigation sections={sections} ref={navRef} />
    </header>
  );
}

export default Banner;
