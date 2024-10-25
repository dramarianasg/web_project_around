// Variables Edicion Perfil
const EditButton = document.querySelector("#EditButton"); // Boton edicion en perfil
const popup = document.querySelector(".popup"); /* Area popup */
const popupOverlay =
  document.querySelector(".popup__overlay"); /* Detras del formulario */
const popupForm =
  document.querySelector(".popup__form"); /* Formulario pop up */
const popupOpened =
  document.querySelector(".popup__opened"); /* Formulario abierto */
const CloseButton =
  document.querySelector("#close_button"); /* Boton de cierre */
// const popupName = document.querySelector("#input-name"); /* Nombre */
// const popupInfo = document.querySelector("#form-info"); /* Acerca de mi */
const popupInputEdit =
  document.querySelector(".popup__input"); /* Informacion en edicion */
const popupSubmit = document.querySelector(".popup__submit"); /* Boton */

// Apertura del popup
function openPopup(popup) {
  popup.classList.add(".popup_opened");
}

// Cierre del popup
function closePopup(popup) {
  popup.classList.remove("popup__opened");
}

// Activacion click para apertura de edicion de perfil
EditButton.addEventListener("click", function () {
  inputName.textContent = popupName.value;
  inputHobbie.textContent = popupInfo.value;
  openPopup(popup);
});

// Evento para cerrar el popup de editar perfil
closeButton.addEventListener("click", function () {
  closePopup(popup);
});
