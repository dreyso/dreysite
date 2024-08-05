window.addEventListener('load', () => {

  const menuToggle = document.querySelector("#mobile-menu-toggle");
  const menu = document.querySelector("#mobile-menu");
  let menuWidth = menu.offsetWidth;
  const icon = document.querySelector("#mobile-menu-icon");
  let lastScrollTop = 0;
  const navbar = document.querySelector('#banner');
  let navbarHeight = navbar.offsetHeight;
  let menuVisible = false;

  // Resize safety
  window.addEventListener('resize', () => {
    menuWidth = menu.offsetWidth;
    navbarHeight = navbar.offsetHeight;
  });

  // Set menu initial position
  const setMenuPos = () => {
    menu.style.right = menuVisible ? `0` : `-${menuWidth}px`;
    menu.style.top = `${navbarHeight}px`;;
  };

  menuToggle.addEventListener('click', () => {
    menuVisible = !menuVisible;
    setMenuPos();
    
    icon.classList.toggle("menu-button-clicked");

    icon.src = icon.src.endsWith('img/menu-closed.svg') 
        ? 'img/menu-open.svg' 
        : 'img/menu-closed.svg';
  });

  // On page load
  setMenuPos();

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
  
  // Banner action
  window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // User is scrolling down
          navbar.style.top = `-${navbarHeight}px`; // Hide the navbar
      } else {
          // User is scrolling up
          navbar.style.top = `0`; // Show the navbar
      }
      lastScrollTop = scrollTop;
  });
});

    
    