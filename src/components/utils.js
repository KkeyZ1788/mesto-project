// функция открытия попап

const handleEscKey = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closePopup(openedPopup);
    }
}

const openPopup = function (popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscKey)
}

// функция закрытия попап
const closePopup = function (popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscKey)
}


export { openPopup, closePopup }