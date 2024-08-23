document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const slideshow = document.querySelector(".slideshow");
  const images = slideshow.querySelectorAll("img");
  const firstImgWidth = images[0].offsetWidth;
  let isDragging = false,
    startX,
    startY,
    scrollLeft,
    slideIndex = 0;

  // Highlight active tab, scroll to active slide
  const updateTabs = (index) => {
    tabs.forEach((tab, i) => tab.classList.toggle("active", i === index));
    slideshow.scrollTo({ left: index * firstImgWidth, behavior: "smooth" });
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
    startY = e.pageY || e.touches[0].pageY;
    scrollLeft = slideshow.scrollLeft;
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const y = e.pageY || e.touches[0].pageY;

    const walkX = x - startX;
    const walkY = y - startY;

    // Threshold for vertical movement to prevent vertical scrolling from moving the slideshow
    if (Math.abs(walkY) > Math.abs(walkX)) {
      isDragging = false;
      return; // Exit if the user is dragging vertically
    }

    // Prevent vertical scrolling
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
  document.addEventListener("touchmove", onDrag, { passive: false }); // Make sure default scrolling is preventable
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchend", stopDrag);
});
