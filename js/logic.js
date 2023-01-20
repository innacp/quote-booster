let openButtonClass = ".open-modal-window";
let closeButtonClass = ".modal-close-icon";
let modalContainerClass = ".modal-container";

















let openButton = document.querySelector(openButtonClass);
let closeButton = document.querySelector(closeButtonClass);

let modalContainer = document.querySelector(modalContainerClass);

openButton.addEventListener("click", (el) => {
  modalContainer.classList.toggle("show");
});

closeButton.addEventListener("click", (el) => {
  modalContainer.classList.toggle("show");
});

// function myClassicFunctionName(el) {

// }

// let myArrowFunctionName = (el) => {

// }
