
////



const animateOnScrollMedia = () => {
  const sections = document.querySelectorAll('.sectionAnim');
  const windowHeight = window.innerHeight;
  
  const handleScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop < windowHeight * 0.9;

      if (sectionVisible) {
        section.classList.add('mostrar');
      } else {
        section.classList.remove('mostrar');
      }
    });
  };

  handleScroll();

  window.addEventListener('scroll', handleScroll);
};

animateOnScrollMedia();