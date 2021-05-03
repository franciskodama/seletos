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
  autoplay: 5000,
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


// ANIMATIONS ---------------------------------------

const animateOnScroll = function ({ offset } = { offset: 10 }) {
  
  // Define a dobra superior, inferior e laterais da tela
  const windowTop = (offset * window.innerHeight) / 100;
  const windowBottom = window.innerHeight - windowTop;
  const windowLeft = 0;
  const windowRight = window.innerWidth;

  this.start = (element) => {
    window.requestAnimationFrame(() => {
      // Seta os atributos customizados
      element.style.animationDelay = element.dataset.animationDelay;
      element.style.animationDuration = element.dataset.animationDuration;

      // Inicia a animacao setando a classe para animar
      element.classList.add(element.dataset.animation);

      // Seta o elemento como animado
      element.dataset.animated = "true";
    });
  };

  this.inViewport = (element) => {
    // Obtem o boundingbox do elemento
    const elementRect = element.getBoundingClientRect();
    const elementTop =
      elementRect.top + parseInt(element.dataset.animationOffset) ||
      elementRect.top;
    const elementBottom =
      elementRect.bottom - parseInt(element.dataset.animationOffset) ||
      elementRect.bottom;
    const elementLeft = elementRect.left;
    const elementRight = elementRect.right;

    // Verifica se o elemento esta na tela
    return (
      elementTop <= windowBottom &&
      elementBottom >= windowTop &&
      elementLeft <= windowRight &&
      elementRight >= windowLeft
    );
  };

  // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
  this.verifyElementsInViewport = (els = elements) => {
    for (let i = 0, len = els.length; i < len; i++) {
      // Passa para o proximo laço se o elemento ja estiver animado
      if (els[i].dataset.animated) continue;

      this.inViewport(els[i]) && this.start(els[i]);
    }
  };

  // Obtem todos os elementos a serem animados
  this.getElements = () =>
    document.querySelectorAll("[data-animation]:not([data-animated])");

  // Atualiza a lista de elementos a serem animados
  this.update = () => {
    elements = this.getElements();
    elements && this.verifyElementsInViewport(elements);
  };

  // Inicia os eventos
  window.addEventListener("load", this.update, false);
  window.addEventListener(
    "scroll",
    () => this.verifyElementsInViewport(elements),
    { passive: true }
  );
  window.addEventListener(
    "resize",
    () => this.verifyElementsInViewport(elements),
    { passive: true }
  );
};

// Initialize
const options = {
  offset: 15 // percentage of the window
};

const animation = new animateOnScroll(options);
