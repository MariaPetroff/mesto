import {Card} from './Card.js';

//Константы и переменные
//Попапы и им сочувствующие
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const profileForm = document.querySelector('.popup__form');
const popupFormNewPlace = document.querySelector('.popup__form_type_new-place');
const popupFullCard = document.querySelector('.popup_type_image');
const popupFigure = popupFullCard.querySelector('.popup__figure');
const popupFigcaption = popupFullCard.querySelector('.popup__figcaption');
const popupContainers = document.querySelectorAll('.popup__container')


//Кнопки
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-btn');
const plusButton = document.querySelector('.profile__plus-button');
//Темплейт
const cardsList = document.querySelector('.cards');

//Константы профиля
const nameContainer = document.querySelector('.profile__name');
const jobContainer = document.querySelector('.profile__description');
const inputName = profileForm.querySelector('.popup__input_type_name');
const inputJob = profileForm.querySelector('.popup__input_type_job');
//Константы для попапа новой карточки
const inputPlace = popupFormNewPlace.querySelector('.popup__input_type_place');
const inputLink = popupFormNewPlace.querySelector('.popup__input_type_link');
const placeContainer = document.querySelector('.cards__caption');
const linkContainer = document.querySelector('.cards__image');











//Вызов попапа профиля (и перезапись его данных) при нажатии на кнопку edit
editButton.addEventListener('click', function(){
    inputName.value = nameContainer.textContent;
    inputJob.value = jobContainer.textContent;
    openPopup(popupProfile);
    
})

//Вызов попапа добавления карточек места при нажатии на кнопку плюс
plusButton.addEventListener('click', event => {
    openPopup(popupPlace);
})

//Функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  //навешивание слушателя для проверки набора на клавиатуре
  document.addEventListener('keydown', closeOnClickEsq);
}

//Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  //навешивание слушателя тк переизбыток слушателей
  document.removeEventListener('keydown', closeOnClickEsq);
}

// Работа кнопок закрытия попапов
closeButtons.forEach(button => {
    const popup = button.closest('.popup');
    button.addEventListener('click', event => {
        closePopup(popup);
    })
})

//Закрытие попапов при клике на оверлей
popupContainers.forEach(container => {
  container.addEventListener('click', evt => {
    evt.stopPropagation();
  });
})

popups.forEach((popup) => {
  popup.addEventListener('click', evt => {
      closePopup(popup);
  })
})

//Закрытие попапов при клике на esq
const closeOnClickEsq = (el) => {
  if (el.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}


//Функция нажатия на кнопки лайк 
//function toggleLike(event) {
//  event.target.classList.toggle('like_active');
//}


//Перезапись данных профиля при нажатии на 'Сохранить' или enter
profileForm.addEventListener('submit', function saveProfile(event) {
    event.preventDefault();
    nameContainer.textContent = inputName.value;
    jobContainer.textContent = inputJob.value;
    closePopup(popupProfile);
})



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//template-элементы
//Создание изначальных карточек из массива
function renderCards() {
  initialCards.forEach((element) => {
    const initialItem = createCard(element.link, element.name);
    cardsList.append(initialItem);
  });
};

renderCards();

//Функция создания каркаса карточки
function createCard(link, name) {
    const cardItem = new Card();
    const cardsElement = cardItem.createClassCard(link, name);

    return cardsElement;
};


//Функция создания новой карточки
function createNewCard() {
  const newCard = createCard(inputLink.value, inputPlace.value);
  return newCard;
  }
//Функция добавления новой карточки
function addNewCard() {
  cardsList.prepend(createNewCard());
}


//Функция удаления карточки
//function deleteCard(event){
//  event.target.closest('.cards__list-item').remove();
//}

//Добавление новой карточки при вводе данных и нажатии на 'Создать'/enter
popupFormNewPlace.addEventListener('submit', event => {
  event.preventDefault();
  addNewCard();
  closePopup(popupPlace);
  popupFormNewPlace.reset();
})


const formsConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_type_disabled',
  inputErrorClass: 'popup__item-error',
  errorClass: 'popup__item-error_type_active'
}

enableValidation(formsConfig);

