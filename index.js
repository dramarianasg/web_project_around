// Variables Edicion Perfil
const profileTitle = document.querySelector(
  ".content__profile_group-infotitle"
); //Título
const profileAbout = document.querySelector(
  ".content__profile_group-infosubtitle"
); //Subtítulo
const EditButton = document.querySelector("#EditButton"); // Boton edicion en perfil
const popup = document.querySelector(".popup"); /* Area popup */
const popupOverlay =
  document.querySelector(".popup__overlay"); /* Detras del formulario */
const popupContainer =
  document.querySelector(".popup__container"); /* Formulario pop up */
const popupOpened =
  document.querySelector(".popup__opened"); /* Formulario abierto */
const CloseButton =
  document.querySelector("#close_button"); /* Boton de cierre */
const popupName = document.querySelector("#input-name"); /* Nombre */
const popupInfo = document.querySelector("#form-info"); /* Acerca de mi */
const popupInputEdit =
  document.querySelector(".popup__input"); /* Informacion en edicion */
const popupSubmit =
  document.querySelector(".popup__submit"); /* Boton enviar info */

// Apertura del popup
function openPopup(popupContainer) {
  popupContainer.classList.add("popup__opened");
}

// Cierre del popup
function closePopup(popupContainer) {
  popupContainer.classList.remove("popup__opened");
}

// Activacion click para apertura de edicion de perfil
EditButton.addEventListener("click", function () {
  profileTitle.textContent = popupName.value;
  profileAbout.textContent = popupInfo.value;
  openPopup(popup);
});

// Activacion click para cierre de edicion de perfil
CloseButton.addEventListener("click", function () {
  closePopup(popup);
});
