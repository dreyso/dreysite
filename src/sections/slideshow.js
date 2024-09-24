import React, { useEffect, useRef, useState } from "react";
import "./slideshow.css";

function Slideshow({ images }) {
  const slideshowRef = useRef(null);
  const tabsRef = useRef([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slideshow = slideshowRef.current;
    const tabs = tabsRef.current;
    const firstImgWidth = slideshow.querySelectorAll("img")[0].offsetWidth;

    let isDragging = false;
    let startX, startY, scrollLeft;

    // Highlight active tab, scroll to active slide
    const updateTabs = (index) => {
      tabs.forEach((tab, i) => tab.classList.toggle("active", i === index));
      slideshow.scrollTo({ left: index * firstImgWidth, behavior: "smooth" });
    };

    // Handle tab click events
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        setSlideIndex(index);
        updateTabs(index);
      });
    });

    // Set default tab/slide
    updateTabs(slideIndex);

    const manualSlide = () => {
      const positionDiff = Math.abs(slideshow.scrollLeft - scrollLeft);
      if (positionDiff > 0) {
        const newSlideIndex =
          slideshow.scrollLeft > scrollLeft ? slideIndex + 1 : slideIndex - 1;
        setSlideIndex(Math.max(0, Math.min(newSlideIndex, images.length - 1)));
        updateTabs(newSlideIndex);
      }
    };

    const startDrag = (e) => {
      isDragging = true;
      startX = e.pageX || e.touches[0].pageX;
      startY = e.pageY || e.touches[0].pageY;
      scrollLeft = slideshow.scrollLeft;
    };

    const onDrag = (e) => {
      if (!isDragging) return;
      const x = e.pageX || e.touches[0].pageX;
      const y = e.pageY || e.touches[0].pageY;

      const walkX = x - startX;
      const walkY = y - startY;

      // Prevent vertical scrolling from affecting slideshow
      if (Math.abs(walkY) > Math.abs(walkX)) {
        isDragging = false;
        return;
      }

      e.preventDefault();
      slideshow.scrollLeft = scrollLeft - walkX;
    };

    const stopDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      manualSlide();
    };

    slideshow.addEventListener("mousedown", startDrag);
    slideshow.addEventListener("touchstart", startDrag);
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("touchmove", onDrag, { passive: false });
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);

    return () => {
      slideshow.removeEventListener("mousedown", startDrag);
      slideshow.removeEventListener("touchstart", startDrag);
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("touchmove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchend", stopDrag);
    };
  }, [slideIndex, images.length]);

  return (
    <div className="slideshow-wrapper centered">
      <div className="slideshow" ref={slideshowRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            height={image.height}
            width={image.width}
            alt={image.alt}
            draggable="false"
          />
        ))}
      </div>

      <div className="slideshow-nav">
        {images.map((_, index) => (
          <button
            key={index}
            className="tab"
            role="tab"
            aria-label={`Slide ${index + 1}`}
            ref={(el) => (tabsRef.current[index] = el)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
