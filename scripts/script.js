// JavaScript Document
console.log("hi");

// navigatie sticky maken (met hulp van bron: https://www.youtube.com/watch?v=hPrXq9HLnrk&t=4s )
var navBar = document.querySelector(".navbar");
// berekenen wanneer de nav de top raakt (en dus sticky moet worden)
var shouldStickPosition = navBar.offsetTop;

function addOrRemoveStickyClass() {
  if (window.pageYOffset >= shouldStickPosition) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

window.onscroll = () => {
  addOrRemoveStickyClass();
};

window.onresize = () => {
  shouldStickPosition = navBar.offsetTop;
};

// De 'terug naar boven' button werkend maken (met hulp van bron: https://chat.openai.com)
var scrollTopButton = document.querySelector("#terugNaarBoven");

// Voeg een click eventlistener toe aan de knop
scrollTopButton.addEventListener('click', () => {
  // Scroll naar de bovenkant van de pagina met een vloeiende animatie
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});