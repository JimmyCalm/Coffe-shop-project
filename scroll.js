window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('shadow');
    } else {
      header.classList.remove('shadow');
    }
  });