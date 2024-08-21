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

  // fall
  const elements = document.querySelectorAll(".fall-in-place");

  elements.forEach((element, index) => {
    const duration = 1 + index * 0.1; // Start at 1s, increase by 0.1s for each element
    element.style.animationDuration = `${duration}s`;
  });
});
