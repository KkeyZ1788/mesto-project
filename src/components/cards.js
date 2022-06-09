

import { openPopup, closePopup } from './utils.js'
import { openImagePopup } from './modals'
import { deleteCard, printError, addLike, deleteLike, postCard } from './api';

const postTemlate = document.querySelector('#post-template').content;
const addCardPopUp = document.querySelector('.popup_add-card') // попап добавления карточки
const formAddCard = addCardPopUp.querySelector('.add-form'); // переменная формы добавления карточки

const cardSubmitBtn = formAddCard.querySelector('.add-card');
const cardContainer = document.querySelector('.elements') // переменная с секцией, куда будут добавляться карточки

//удаление карточки

const handleCardRemove = (event) => {
  event.target.closest('.elements__item').remove();

};

//лайк карточки handleGardLike

function  handleGardLike(likeButton, elementLikeCount, cardId) {

  if (likeButton.classList.contains('button_is-active')) {
deleteLike(cardId)
  .then(res => {
    elementLikeCount.textContent = res.likes.length;
    likeButton.classList.remove('button_is-active');
  })
  .catch(err => console.error(err))
} else {
addLike(cardId)
  .then(res => {
    elementLikeCount.textContent = res.likes.length;
    likeButton.classList.add('button_is-active');
  })
  .catch(err => console.error(err))
}
};


// Функция создания карточки
function createCard(cardData, userId) {

  const { likes, name, link, isLiked, cardId, owner } = cardData;
  const postElement = postTemlate.querySelector('.elements__item').cloneNode(true);
  const imageElement = postElement.querySelector('.elements__img')
  const likeButton = postElement.querySelector('.elements__like-button')
  const elementLikeCount = postElement.querySelector('.element__like-counter');

  likeButton.addEventListener('click',
    (evt) => {handleGardLike(likeButton, elementLikeCount, cardData._id) });


  imageElement.src = link;
  imageElement.alt = name;
  imageElement.addEventListener('click', openImagePopup);
  postElement.querySelector('.elements__item-name').textContent = name;

  elementLikeCount.textContent = likes.length;


  const deleteButton = postElement.querySelector('.delete')
  deleteButton.addEventListener('click', function () {
    deleteCard(cardData._id)
      .then(() => {
        const cardItem = deleteButton.closest('.elements__item');
        cardItem.remove();
      })
      .catch(printError)
  });

  if (cardData.likes.some(item => item._id === userId)) {

    likeButton.classList.add('button_is-active');
  }

  if (cardData.owner._id !== userId) {
    deleteButton.remove();
  }


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






export { createCard, openAddForm, closeAddForm,  formAddCard, addCardPopUp, cardContainer, cardSubmitBtn }
