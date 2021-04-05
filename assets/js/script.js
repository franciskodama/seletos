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




//SELECTORS --------------------------------


//EVENT LISTENERS --------------------------


//FUNCTIONS --------------------------------
