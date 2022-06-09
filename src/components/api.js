






// идентификатор пользователя
const UserData = {
    urlData: "https://nomoreparties.co/v1/plus-cohort-9",
    headers: {
        authorization: '3e17db6a-6951-46bf-9280-ebc36e39e39a',
        'Content-Type': 'application/json'
    }
}


// проверяем ответ
function chekServerResponse(res) {
    if (res.ok) {
        return res.json();
    } else { return Promise.reject(`Ошибка: ${res.status}`) }
}


//загрузка данных пользователя с сервера
const getUserData = () => {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-9/users/me`, {
        method: 'GET',
        headers: {
          authorization: '3e17db6a-6951-46bf-9280-ebc36e39e39a',
          'Content-Type': 'application/json'
      }
    })
        .then(chekServerResponse)
}

// Загрузка карточек с сервера

function getInitialCards() {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/cards', {
        method: 'GET',
        headers: {
          authorization: '3e17db6a-6951-46bf-9280-ebc36e39e39a',
          'Content-Type': 'application/json'
      }
    })
    .then(chekServerResponse)
}

//Редактирование профиля

const editProfile = (name, description) => {
    return fetch (`https://nomoreparties.co/v1/plus-cohort-9/users/me `, {
      method: 'PATCH',
      headers: {
        authorization: '3e17db6a-6951-46bf-9280-ebc36e39e39a',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: name,
        about: description
      })
    })
      .then(chekServerResponse)
  };


  //Добавление новой карточки
const postCard = (cardName, cardLink) => {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-9/cards `, {
      method: 'POST',
      headers: {
        authorization: '3e17db6a-6951-46bf-9280-ebc36e39e39a',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: cardName,
        link: cardLink
      })
    })
      .then(chekServerResponse)
  };

  // удаление карточки
  const deleteCard = (cardId) => {
    return fetch(`${UserData.urlData}/cards/${cardId}`, {
      method: 'DELETE',
      headers: UserData.headers
    })
      .then(chekServerResponse)
  };
  //Постановка и снятие лайка
  const addLike = (cardId) => {
    return fetch(`${UserData.urlData}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: UserData.headers
    })
      .then(chekServerResponse)
  };
  
  
  const deleteLike = (cardId) => {
    return fetch(`${UserData.urlData}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: UserData.headers
    })
      .then(chekServerResponse)
  };
  
  //Обновление аватара пользователя
  const editProfileAvatar = (avatarLink) => {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-9/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: '3e17db6a-6951-46bf-9280-ebc36e39e39a',
        'Content-Type': 'application/json'
    },

      body: JSON.stringify({
        avatar: avatarLink
      })
    })
      .then(chekServerResponse)
  }

function printError(error) {
    console.log(`Ошибка: ${error}`);
}


  export{chekServerResponse,
    getUserData, 
    getInitialCards, 
    editProfile, 
    postCard, 
    deleteCard, 
    addLike,  
    deleteLike,
    editProfileAvatar,
    printError}