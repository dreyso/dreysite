document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("activated");
          observer.unobserve(entry.target); // Stop observing after the element becomes visible
        }
      });
    },
    { threshold: 0.05 }
  );

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });

  /* The scan-left animation uses a mask, which hides box-shadows, so the mask needs to go after the animation is done */
  const elements = document.querySelectorAll(".scan-left");

  elements.forEach((element) => {
    element.addEventListener("transitionend", function () {
      element.style.maskImage = "none";
      element.style.maskSize = "none";
      element.style.maskPosition = "none";
    });
  });

  // Fall in place animation
  const elements1 = document.querySelectorAll(".fall-in-place");

  elements1.forEach((element, index) => {
    const duration = 1 + index * 0.1; // Start at 1s, increase by 0.1s for each element
    element.style.animationDuration = `${duration}s`;
  });
});
