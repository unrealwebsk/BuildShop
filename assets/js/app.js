// Scroll to element
const scrollBtns = document.querySelectorAll('.scroll-to');

scrollBtns.forEach(btn => {
    hideMobileMenu(btn)
   btn.addEventListener('click', (e) => {
      e.preventDefault();

      let section = e.target.closest('.scroll-to').getAttribute('data-target');

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

// Toggle mobile menu

const burger         = document.querySelector('#burger');
const close          = document.querySelector('#close-menu');
const menu           = document.querySelector('#mobile-menu');
const body           = document.querySelector('body');
const overlay        = document.querySelector('#overlay');

showMobileMenu(burger);
hideMobileMenu(close);

// Functions

function showMobileMenu(trigger) {
  trigger.addEventListener('click', (e)=> {
    e.preventDefault();
  
    overlay.classList.remove('hidden');
    body.classList.add('overflow-hidden');
    menu.classList.add('active');
  })
}

function hideMobileMenu(trigger) {
  trigger.addEventListener('click', (e)=> {
    e.preventDefault();
  
    body.classList.remove('overflow-hidden');
    menu.classList.remove('active');
    overlay.classList.add('hidden');
  })
}