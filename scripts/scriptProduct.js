// JavaScript Document
console.log("hi");

// navigatie sticky maken (met hulp van bron: https://www.youtube.com/watch?v=hPrXq9HLnrk&t=4s )
var navBar = document.querySelector(".navbar");
// berekenen wanneer de nav de top raakt (en dus sticky moet worden)
var shouldStickPosition = navBar.offsetTop;

// button sticky maken (zelfde techniek als navbar)
var voegToeButton = document.querySelector(".toevoegenWinkelwagen");
var shouldStickPositionButton = voegToeButton.offsetTop;

function addOrRemoveStickyClass() {
    if (window.pageYOffset >= shouldStickPosition) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
};

// button sticky maken (zelfde techniek als navbar)
function addOrRemoveStickyClassButton() {
    if (window.pageYOffset >= shouldStickPositionButton) {
        voegToeButton.classList.add("sticky");
    } else {
        voegToeButton.classList.remove("sticky");
    }
};

window.onscroll = () => {
    addOrRemoveStickyClass();
    addOrRemoveStickyClassButton();
};

window.onresize = () => {
    shouldStickPosition = navBar.offsetTop;
    shouldStickPositionButton = voegToeButton.offsetTop;
};

// aantalSelecteren knop werkend maken (incrementer/decrementer-button) (met hulp van bron: https://chat.openai.com)
var decrementButton = document.querySelector('.decrement-button');
var incrementButton = document.querySelector('.increment-button');
var quantityInput = document.querySelector('.quantity');

decrementButton.addEventListener('click', () => {
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

incrementButton.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

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