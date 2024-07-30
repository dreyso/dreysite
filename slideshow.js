document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const slideshow = document.querySelector(".slideshow");
  const images = slideshow.querySelectorAll("img");
  const firstImgWidth = images[0].offsetWidth;
  let isDragging = false, startX, scrollLeft, slideIndex = 0;

  // Highlight active tab, scroll to active slide
  const updateTabs = (index) => {
    tabs.forEach((tab, i) => tab.classList.toggle("active", i === index));
    slideshow.scrollTo({ left: index * firstImgWidth, behavior: 'smooth' });
  };

  // Give each tab a click event
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      slideIndex = index;
      updateTabs(index);
    });
  });

  // Set default tab/slide
  updateTabs(slideIndex);

  // Cursor or touch slide
  const manualSlide = () => {
    const positionDiff = Math.abs(slideshow.scrollLeft - scrollLeft);
    if (positionDiff > 0) {
      slideIndex += slideshow.scrollLeft > scrollLeft ? 1 : -1;
    }
    slideIndex = Math.max(0, Math.min(slideIndex, images.length - 1));
    updateTabs(slideIndex);
  };

  const startDrag = (e) => {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = slideshow.scrollLeft;
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    slideshow.scrollLeft = scrollLeft - (x - startX);
  };

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    manualSlide();
  };

  slideshow.addEventListener("mousedown", startDrag);
  slideshow.addEventListener("touchstart", startDrag);
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("touchmove", onDrag);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchend", stopDrag);
});
