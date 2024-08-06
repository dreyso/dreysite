window.addEventListener('load', () => {
  
    const sections = document.querySelectorAll(".main-section");
    const navLinks = document.querySelectorAll("#nav-menu a");
  
    const options = {
        threshold: 0.5
    };
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.toggle("active-bookmark", link.getAttribute("href").substring(1) === id);
                });
            }
        });
    }, options);
  
    sections.forEach(section => {
        observer.observe(section);
    });
});
  
      
      