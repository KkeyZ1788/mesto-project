
import '../pages/index.css';

import { createCard, openAddForm, closeAddForm, formAddCard, addCardPopUp, cardContainer, cardSubmitBtn } from './cards.js'
import { initialCards } from './initial-cards'
import {
  profilePopup,
  imagePopup,
  // openProfilePopup,
  closeProfilePopup,
  closePopupByClickOnOverlay,
  // handleProfileFormSubmit,

  popupAvatarEdit,
  closeAvatarEditPopup,
  closeImagePopup,
  profileName,
  profileDescription
} from './modals'
import { enableValidation } from './validate'
import { getInitialCards, printError, getUserData, editProfile, postCard, editProfileAvatar, deleteCard } from './api.js';
import { openPopup, closePopup } from './utils'

// ПЕРЕМЕННЫЕ

const popupOpenButton = document.querySelector('.profile__edit-button')
const profileCloseBtn = profilePopup.querySelector('.popup__close')
const formEditProfile = profilePopup.querySelector('.popup__content')
const imagePopupCloseButton = imagePopup.querySelector('.popup__close')// крестик в попапе с картинкой
const addNewCardButton = document.querySelector('.profile__add-button') // кнопка плюсик
const addCardButton = formAddCard.querySelector('.add-card');// кнопка создать
const formAddCardCloseButton = formAddCard.querySelector('.popup__close'); // крестик
const profileAvatar = document.querySelector('.profile__avatar')
const cardFormName = formAddCard.querySelector('.popup__form_type_add-name');
const cardFormLink = formAddCard.querySelector('.popup__form_type_add-link');

let userId;
const nameInput = profilePopup.querySelector('.popup__form_type_name');
const jobInput = profilePopup.querySelector('.popup__form_type_job');

const popupAvatarLink = popupAvatarEdit.querySelector('.popup__form_type_avatar-link');
const avatarEditButton = popupAvatarEdit.querySelector('.popup__save-button')
const avatarEditForm = popupAvatarEdit.querySelector('.Edit-avatar-form');
const openAvatarEditBtn = document.querySelector('.profile__avatar-edit')

const editProfileSubmtBtn = profilePopup.querySelector('.popup__save-button');

const avatarEditCloseButton = popupAvatarEdit.querySelector('.popup__close')
//Обновляем данные пользователя на странице


function udateUserData(data) {

  profileName.textContent = data.name;
  profileDescription.textContent = data.about;
  profileAvatar.src = data.avatar;
}





Promise.all([getUserData(), getInitialCards()])
  .then(([userData, cards]) => {
    const userId = userData._id;
    udateUserData(userData);
    cards.forEach((card) => {
      cardContainer.append(createCard(card, userId));
    });
  })
  .catch(printError);


// функция открытия попап редактирования профиля
const openProfilePopup = function () {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent
  jobInput.value = profileDescription.textContent
}

// редактирование профиля
const handleProfileFormSubmit = function (evt) {
  evt.preventDefault()


  editProfile(nameInput.value, jobInput.value)
    .then(res => {
      udateUserData(res);
      editProfileSubmtBtn.setAttribute('disabled', true);
      closeProfilePopup(profilePopup);
    })
    .catch(printError)


  // profileName.textContent = nameInput.value
  // profileDescription.textContent = jobInput.value
  // closePopup(profilePopup)
}

// редактирование аватара 
function handleProfileAvatarEdit() {
  const avatarLink = popupAvatarLink.value;

  editProfileAvatar(avatarLink)
    .then(link => {
      profileAvatar.src = link.avatar; // готово
      avatarEditButton.disabled = true; // готово
      closeAvatarEditPopup(popupAvatarEdit)// готово
    })
    .catch(printError)
}


// Создание карточки из формы
const handleAddCardFromForm = function (evt) {
  evt.preventDefault();
  checkLoading(true, addCardButton);

  const cardName = cardFormName.value;
  const cardLink = cardFormLink.value;

  postCard(cardName, cardLink)
    .then(card => cardContainer.prepend(createCard(card, userId)))
    .then(() => {

      cardSubmitBtn.classList.add('popup__button_disabled');
      cardSubmitBtn.setAttribute('disabled', true);
      closeAddForm();
    })
    .catch(printError)
    .finally(() => checkLoading(false, addCardButton));

}


function checkLoading(isLoading, button) {
  if (button.name === 'create-card-button') {
    button.textContent = isLoading ? 'Сохранение...' : 'Создать'
  } else {
    button.textContent = isLoading ? 'Сохранение...' : 'Сохранить'
  }
}



// Добавление изначальных карточек
// initialCards.forEach(card => cardContainer.prepend(createCard(card)));



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
profileCloseBtn.addEventListener('click', closeProfilePopup);
popupAvatarEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  handleProfileAvatarEdit();
});
openAvatarEditBtn.addEventListener('click', () => {

  openPopup(popupAvatarEdit);
});

popupAvatarEdit.addEventListener('mousedown', closePopupByClickOnOverlay);
avatarEditCloseButton.addEventListener('click', closeAvatarEditPopup);