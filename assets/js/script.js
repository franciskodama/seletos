// Buttons | Smooth navigation + Unhide content behind (position - 70px) -----------

const links = document.querySelectorAll(".js-button");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 70;
  console.log(offsetTop);
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}



// Mobile Hamburguer Menu | Open and Close ---------------------------------------

const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('nav');

closeButton.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

openButton.addEventListener("click", () => {
  nav.classList.add('navigation-open');
});

const closeButtonAfterClick = document.querySelectorAll('.js-button');
for (var i = 0; i < closeButtonAfterClick.length; i++) {
  closeButtonAfterClick[i].addEventListener("click", () => {
    nav.classList.remove('navigation-open');
  });
}


// Packages Slider ---------------------------------------

new Glide('.glide', {
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




//SELECTORS --------------------------------


//EVENT LISTENERS --------------------------


//FUNCTIONS --------------------------------
