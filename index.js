    let navToggle = document.querySelector("#nav-toggle");
    let mobileMenu = document.querySelector("#mobile-menu");
    let icon = document.querySelector("#menu-icon");

    navToggle.onclick = function (event) {
      mobileMenu.classList.toggle("mobile-menu-open");
      icon.classList.toggle("menu-button-clicked");

      if (icon.src.endsWith('img/menu-closed.svg')) {
        icon.src = 'img/menu-open.svg';
      } else {
        icon.src = 'img/menu-closed.svg';
      }
    };

    // Calculate the header height and set the top position of nav
    var header = document.querySelector("#banner");
    var nav = document.querySelector("#mobile-menu");

    if (header && nav) {
      nav.style.top = header.offsetHeight + "px";
    }
