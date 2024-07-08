document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("#nav-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  const icon = document.querySelector("#menu-icon");

  navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle("mobile-menu-open");
      icon.classList.toggle("menu-button-clicked");

      icon.src = icon.src.endsWith('img/menu-closed.svg') 
          ? 'img/menu-open.svg' 
          : 'img/menu-closed.svg';
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#mobile-menu a");

  const options = {
      threshold: 0.9
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              navLinks.forEach(link => {
                  link.classList.toggle("active-link", link.getAttribute("href").substring(1) === id);
              });
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});



    
    