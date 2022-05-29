
import '../pages/index.css';

import { createCard, openAddForm, closeAddForm, handleAddCardFromForm, formAddCard, addCardPopUp, cardContainer } from './cards.js'
import { initialCards } from './initial-cards'
import {
  profilePopup,
  imagePopup,
  openProfilePopup,
  closeProfilePopup,
  closePopupByClickOnOverlay,
  handleProfileFormSubmit,
  closeImagePopup,
} from './modals'
import { enableValidation } from './validate'

// ПЕРЕМЕННЫЕ

const popupOpenButton = document.querySelector('.profile__edit-button')

const profileCloseBtn = profilePopup.querySelector('.popup__close')
const formEditProfile = profilePopup.querySelector('.popup__content')

const imagePopupCloseButton = imagePopup.querySelector('.popup__close')// крестик в попапе с картинкой
const addNewCardButton = document.querySelector('.profile__add-button') // кнопка плюсик

const addCardButton = formAddCard.querySelector('.add-card');// кнопка создать
const formAddCardCloseButton = formAddCard.querySelector('.popup__close'); // крестик




// Добавление изначальных карточек
initialCards.forEach(card => cardContainer.prepend(createCard(card)));



enableValidation({
  formSelector: '.form',
  inputSelector: '.popup__form',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'popup__error_visible'
});




addNewCardButton.addEventListener('click', openAddForm);
formAddCardCloseButton.addEventListener('click', closeAddForm);
addCardPopUp.addEventListener('mousedown', closePopupByClickOnOverlay);
formAddCard.addEventListener('submit', handleAddCardFromForm);
imagePopupCloseButton.addEventListener('click', closeImagePopup);
imagePopup.addEventListener('mousedown', closePopupByClickOnOverlay);
popupOpenButton.addEventListener('click', openProfilePopup)
profileCloseBtn.addEventListener('click', closeProfilePopup)
profilePopup.addEventListener('mousedown', closePopupByClickOnOverlay)
formEditProfile.addEventListener('submit', handleProfileFormSubmit)
profileCloseBtn.addEventListener('click', closeProfilePopup)