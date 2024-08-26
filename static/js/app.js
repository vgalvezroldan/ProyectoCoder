document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.novedad-item');

  const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, {
    threshold: 0.1 
  });

  images.forEach(image => {
    observer.observe(image);
  });
});

