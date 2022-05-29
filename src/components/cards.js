

import { openPopup, closePopup } from './utils.js'
import { openImagePopup } from './modals'


const postTemlate = document.querySelector('#post-template').content;
const addCardPopUp = document.querySelector('.popup_add-card') // попап добавления карточки
const formAddCard = addCardPopUp.querySelector('.add-form'); // переменная формы добавления карточки
const cardName = formAddCard.querySelector('.popup__form_type_add-name');
const cardLink = formAddCard.querySelector('.popup__form_type_add-link');
const cardSubmitBtn = formAddCard.querySelector('.add-card');
const cardContainer = document.querySelector('.elements') // переменная с секцией, куда будут добавляться карточки

//удаление карточки

const handleCardRemove = (event) => {
  event.target.closest('.elements__item').remove();
};

// лайк карточки
const handleGardLike = (event) => {
  event.target.classList.toggle('button_is-active');
};

// Функция создания карточки
const createCard = (card) => {
  const postElement = postTemlate.querySelector('.elements__item').cloneNode(true);
  const imageElement = postElement.querySelector('.elements__img')
  imageElement.src = card.link;
  imageElement.alt = card.name;
  imageElement.addEventListener('click', openImagePopup);
  postElement.querySelector('.elements__item-name').textContent = card.name;
  postElement.querySelector('.delete').addEventListener('click', handleCardRemove);
  postElement.querySelector('.elements__like-button').addEventListener('click', handleGardLike);


  return postElement

};

// Открытие формы для добавления карточки
const openAddForm = function () {
  openPopup(addCardPopUp);
};

// Закрытие формы для добавления карточки
const closeAddForm = function () {
  closePopup(addCardPopUp);


};



// Создание карточки из формы
const handleAddCardFromForm = function (evt) { //addCardFromHandler
  evt.preventDefault();

  const newCard = createCard({
    name: cardName.value,
    link: cardLink.value,
  });

  cardContainer.prepend(newCard);
  closeAddForm();


  cardName.value = "";
  cardLink.value = "";

  cardSubmitBtn.classList.add('popup__button_disabled');
  cardSubmitBtn.setAttribute('disabled', true);

}


export { createCard, openAddForm, closeAddForm, handleAddCardFromForm, formAddCard, addCardPopUp, cardContainer }
