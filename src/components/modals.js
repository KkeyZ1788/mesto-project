

import { openPopup, closePopup } from './utils'
import {editProfile} from './api'


const profilePopup = document.querySelector('.popup_edit-profile');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const imagePopup = document.querySelector('.popup_type_image') // Попап с картинкой
const imageName = imagePopup.querySelector('.popup__image-name');
const imagePopupElement = imagePopup.querySelector('.popup__image');
const popupAvatarEdit = document.querySelector('.popup__edit-avatar');




const closeProfilePopup = function () { // функция закрытия попап редактирования профиля
  closePopup(profilePopup);
}

const closeAvatarEditPopup = function () { // функция закрытия попап редактирования аватара
  closePopup(popupAvatarEdit);
}


// ф-я закрытия попап кликом редактирования профиля на фон
const closePopupByClickOnOverlay = function (event) {
  if (event.target.classList.contains('popup')) {
    closePopup(event.target);
  }
}




// ОТКРЫТИЕ ПОПАПА С КАРТИНКОЙ
const openImagePopup = function (event) {
  openPopup(imagePopup);
  const item = event.target;
  imagePopupElement.src = item.src;
  imageName.textContent = item.alt;
  imagePopupElement.alt = item.alt;

}

// Закрытие попапа с картинкой
const closeImagePopup = function () {
  closePopup(imagePopup)
}


export {

  profileName,
  profileDescription,
  imagePopupElement,
  imageName,
  profilePopup,
  imagePopup,
  popupAvatarEdit,
  closeAvatarEditPopup,
  // openProfilePopup,
  closeProfilePopup,
  closePopupByClickOnOverlay,
  // handleProfileFormSubmit,
  openImagePopup,
  closeImagePopup,
}

