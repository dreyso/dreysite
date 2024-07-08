document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides");
  const tabs = document.querySelectorAll(".tabs");

  // Display only the active slide and highlight only the active tab
  function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
      slide.style.display = (index === slideIndex) ? "block" : "none";
    });

    tabs.forEach((tab, index) => {
      tab.classList.toggle("active", index === slideIndex);
    });
  }

  // Give each tab an event listener
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Show default slide
  let slideIndex = 0;
  showSlide(slideIndex);
});

