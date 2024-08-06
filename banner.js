window.addEventListener('load', () => {

    const banner = document.querySelector('#banner');
    
    /* Hide/Show Banner */
    let ongoingTouch = false;
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', () => {
  
      // Avoid changing banner state when the screen is being touched
      if (ongoingTouch){
        return;
      }
  
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
        if (scrollTop > lastScrollTop) {
            // User is scrolling down
            banner.style.top = `-${banner.offsetHeight}px`; // Hide the banner
        } else {
            // User is scrolling up
            banner.style.top = `0`; // Show the banner
        }
        lastScrollTop = scrollTop;
    });
  
    document.addEventListener("touchstart", () => {
      ongoingTouch = true;
    });
  
    document.addEventListener("touchend", () => {
      ongoingTouch = false;
    });
});
  
      
      