// Scroll to element
const scrollBtns = document.querySelectorAll('.scroll-to');

scrollBtns.forEach(btn => {
   btn.addEventListener('click', (e) => {
      e.preventDefault();

      let section = e.target.getAttribute('data-target');

      window.scrollTo({
         top: document.querySelector(section).offsetTop,
         behavior: 'smooth'
       });
   })
});

// Toggle scroll to top
const scrollToTop = document.querySelector('#toTop');

window.addEventListener('scroll', (e) => {
  if (window.pageYOffset > 600) {
    scrollToTop.classList.add('active')
  } else {
    scrollToTop.classList.remove('active')
  }
});