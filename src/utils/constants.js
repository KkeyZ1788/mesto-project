// ПЕРЕМЕННЫЕ

export const  validationSettings = {
    formSelector: '.form',
    inputSelector: '.popup__form',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error_visible'
  };


  export const profilePopup = document.querySelector('.popup_edit-profile');
  const imagePopup = document.querySelector('.popup_type_image');
  const addCardPopUp = document.querySelector('.popup_add-card'); // попап добавления карточки
   // переменная формы добавления карточки
  const popupAvatarEdit = document.querySelector('.popup__edit-avatar');
//   export const addCardForm =document.querySelector('.add-card-form')
export const formAddCard = addCardPopUp.querySelector('.add-form');
  export const buttonOpenPopupEdit = document.querySelector('.profile__edit-button')
  export const profileCloseBtn = profilePopup.querySelector('.popup__close')
  export const formEditProfile = profilePopup.querySelector('.popup__content')
  export const imagePopupCloseButton = imagePopup.querySelector('.popup__close')// крестик в попапе с картинкой
  export const addNewCardButton = document.querySelector('.profile__add-button') // кнопка плюсик
  export const addCardButton = formAddCard.querySelector('.add-card');// кнопка создать
  export const formAddCardCloseButton = formAddCard.querySelector('.popup__close'); // крестик
  export const profileAvatar = document.querySelector('.profile__avatar')
  export const cardFormName = formAddCard.querySelector('.popup__form_type_add-name');
  export const cardFormLink = formAddCard.querySelector('.popup__form_type_add-link');
 
  export let userId;
  export const nameInput = profilePopup.querySelector('.popup__form_type_name');
  export const jobInput = profilePopup.querySelector('.popup__form_type_job');

  export const popupAvatarLink = popupAvatarEdit.querySelector('.popup__form_type_avatar-link');
  export const avatarEditButton = popupAvatarEdit.querySelector('.popup__save-button')
  export const avatarEditForm = popupAvatarEdit.querySelector('.Edit-avatar-form');
  export const openAvatarEditBtn = document.querySelector('.profile__avatar-edit')

  export const editProfileSubmtBtn = profilePopup.querySelector('.popup__save-button');

  export const avatarEditCloseButton = popupAvatarEdit.querySelector('.popup__close')

  export const editProfileForm = document.querySelector('edit-profile-form');

 