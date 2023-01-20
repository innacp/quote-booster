"use strict";

var openButtonClass = ".open-modal-window";
var closeButtonClass = ".modal-close-icon";
var modalContainerClass = ".modal-container";
var openButton = document.querySelector(openButtonClass);
var closeButton = document.querySelector(closeButtonClass);
var modalContainer = document.querySelector(modalContainerClass);
openButton.addEventListener("click", function (el) {
  modalContainer.classList.toggle("show");
});
closeButton.addEventListener("click", function (el) {
  modalContainer.classList.toggle("show");
}); // function myClassicFunctionName(el) {
// }
// let myArrowFunctionName = (el) => {
// }