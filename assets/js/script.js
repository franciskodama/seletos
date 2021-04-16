// MOBILE HAMBURGUER MENU | Open and Close ---------------------------------------

const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('nav');
const buttonHamburguer = document.querySelector('.button-hamburguer');

closeButton.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
  buttonHamburguer.classList.remove('button-hamburguer-hidden');
});

openButton.addEventListener("click", () => {
  nav.classList.add('navigation-open');
  buttonHamburguer.classList.add('button-hamburguer-hidden');
});

const closeButtonAfterClick = document.querySelectorAll('.smooth-scroll');
for (let i = 0; i < closeButtonAfterClick.length; i++) {
  closeButtonAfterClick[i].addEventListener("click", () => {
    nav.classList.remove('navigation-open');
    buttonHamburguer.classList.remove('button-hamburguer-hidden');
  });
}


// CAROUSEL: PACKAGES AND TESTIMONIALS ---------------------------------------

new Glide('.carousel-packages', {
  type: 'carousel',
  perView: 3,
  autoplay: 3000,
  gap: 40,
  breakpoints: {
    1080: {
      perView: 2
    },
    768: {
      perView: 1
    }
    
  }

}).mount()

new Glide('.carousel-testimonials', {
  type: 'carousel',
  perView: 1,
  autoplay: 3000,

}).mount()


// TO TOP BUTTON ---------------------------------------

window.onscroll = function () {
    if (pageYOffset >= 200) {
        document.getElementById('backToTop').style.visibility = "visible";
    } else {
 document.getElementById('backToTop').style.visibility = "hidden";
    }
};

document.getElementById('backToTop').onclick = function()
{
    scrollTo(document.body, 0, 0);
}
