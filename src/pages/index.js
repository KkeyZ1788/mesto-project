import '../pages/index.css'
import {validationSettings, buttonOpenPopupEdit, addNewCardButton,
    openAvatarEditBtn, formAddCard, avatarEditForm,
    profilePopup , nameInput, jobInput, editProfileSubmtBtn} from '../utils/constants.js';



   import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormVaidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';


// создание экземпляра класса Api
export const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
      authorization: '3e17db6a-6951-46bf-9280-ebc36e39e39a',
      'Content-Type': 'application/json',
  }
});

//создание экземпляра класса UserInfo
const userInfo = new UserInfo({userNameSelector: '.profile__name',
  userAboutSelector: '.profile__description',
  userAvatarSelector: '.profile__avatar'});


  // Получаем и записываем данные с сервера
let userIdFromServer;
Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userIdFromServer = userData._id; 
    section.addItems(cards);
  })
  .catch((err) => {console.log(err)});




// Функция создания карточек
const createCard = (data) => {
  const card = new Card({ cardData: data,
    userId: userIdFromServer,
    handleDelClick: (item) => {
      api.deleteCard(item._id)
        .then(() => {
          card.deleteCard();
        })
        .catch((err) => {console.log(err)})
    },

    handleCardClick: (item) => {
      imagePopup.open(item);
    },
    
    handleLikeClick: (item) => {
      if ( card.isLikedCard() ) {
        api.deleteLike(item._id)
          .then((res) => {
            card.clickButtonLike(res)
          })
          .catch((err) => console.error(err))
      } else {
        api.addLike(item._id)
          .then((res) => {
            card.clickButtonLike(res)
          })
          .catch((err) => console.error(err))}
    }

  }, "post-template" );
  return card.generate();

}

//Создаем экземпляр класса Section
const section = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    section.addItem(cardElement)
  }
}, '.elements');





//Попап аватара

const popupAvatar = new PopupWithForm ({
  popupSelector: '.popup__edit-avatar',
  colbackSubmit: 
  (item) => {
    checkLoading(true, avatarEditForm);
    api.editAvatarProfile(item.avatar)
      .then((data) => {
        userInfo.setUserAvatar(data);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(()=> {
        checkLoading(true, avatarEditForm);;
      })
  }
});

openAvatarEditBtn.addEventListener('click', () => {
  formVaidatorEditAvatar.hideErorrs();
  popupAvatar.open();
 });

popupAvatar.setEventListeners();

// Попап редактирования профиля

const editProfile = new PopupWithForm ({
  popupSelector: '.popup_edit-profile',
  colbackSubmit: (item) => {
    checkLoading(true, editProfileSubmtBtn);
    api.editProfile(item)
      .then((data)=> {
        userInfo.setUserInfo(data);
        editProfile.close();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(()=> {
        checkLoading(false, editProfileSubmtBtn);
      })

  }
})



buttonOpenPopupEdit.addEventListener('click', () => {
  const {about, name} = userInfo.getUserInfo();
  
  formVaidatorEditProfile.hideErorrs();
  nameInput.value = name;
  
  jobInput.value= about;
  
  editProfile.open();

});
editProfile.setEventListeners();

// Попап добавления карточки

const addCardProfile = new PopupWithForm ({
  popupSelector: '.popup_add-card',
  colbackSubmit: (item) => {
    
    api.postCard(item)
      .then((data)=> {        
        const cardData = createCard(data);
        section.prependItem(cardData);
        addCardProfile.close();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
     
  }
})

addNewCardButton.addEventListener('click', () => {
  formVaidatorAddCard.hideErorrs();
  addCardProfile.open();
});
addCardProfile.setEventListeners();



// Попап картинок
const imagePopup = new PopupWithImage ('.popup_type_image')
imagePopup.setEventListeners();


//Валидация

const formVaidatorAddCard = new FormVaidator(validationSettings, formAddCard);
formVaidatorAddCard.enableValidation();
const formVaidatorEditProfile = new FormVaidator(validationSettings, profilePopup) ;
formVaidatorEditProfile.enableValidation();
const formVaidatorEditAvatar = new FormVaidator(validationSettings, avatarEditForm);
formVaidatorEditAvatar.enableValidation();


//Улучшенный UX всех форм
export function checkLoading(isLoading, button) {
    if (button.name === 'create-card-button') {
      button.textContent = isLoading ? 'Сохранение...' : 'Создать'
    } else {
      button.textContent = isLoading ? 'Сохранение...' : 'Сохранить'
    }
  }




