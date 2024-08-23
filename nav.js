window.addEventListener("load", () => {
  const menu = document.querySelector("#nav-menu");
  let menuWidth = menu.offsetWidth;
  const navbar = document.querySelector("#banner");
  let navbarHeight = navbar.offsetHeight;

  // Resize safety
  window.addEventListener("resize", () => {
    menuWidth = menu.offsetWidth;
    navbarHeight = navbar.offsetHeight;
    setMenuPos();
  });

  // Set menu initial position
  let menuVisible = false;
  const menuToggle = document.querySelector("#mobile-menu-toggle");
  const icon = document.querySelector("#mobile-menu-icon");

  const setMenuPos = () => {
    menu.style.right = menuVisible ? `0` : `-${menuWidth}px`;
    menu.style.top = `${navbarHeight}px`;
  };

  menuToggle.addEventListener("click", (event) => {
    menuVisible = !menuVisible;
    setMenuPos();
    icon.classList.toggle("menu-button-clicked");

    icon.src = icon.src.endsWith("assets/icons/menu-closed.svg")
      ? "assets/icons/menu-open.svg"
      : "assets/icons/menu-closed.svg";
  });

  document.addEventListener("click", (event) => {
    if (
      menuVisible &&
      !menu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menuVisible = false;
      setMenuPos();
      icon.classList.remove("menu-button-clicked");
      icon.src = "assets/icons/menu-closed.svg";
    }
  });

  // On page load
  setMenuPos();
  setTimeout(() => {
    menu.style.visibility = "visible";
  }, 500); // Fix flashing menu on page load
});
