document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#mobile-menu-toggle");
  const menu = document.querySelector("#mobile-menu");
  const icon = document.querySelector("#mobile-menu-icon");

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle("mobile-menu-open");
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

  // Copy the email to the clipboard
  const copyButton = document.querySelector("#copy-email-button");
      const email = "adreysco@gmail.com";

      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(email).then(() => {
          alert('Email copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy email: ', err);
        });
      });
});



    
    