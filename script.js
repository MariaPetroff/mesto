//Константы и переменные
//Попапы и им сочувствующие
const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupForm = document.querySelector('.popup__form');
const popupFormNewPlace = document.querySelector('.popup__form_type_new-place');
const popupFullCard = document.querySelector('.popup_type_image');
const popupFigure = popupFullCard.querySelector('.popup__figure');
const popupFigcaption = popupFullCard.querySelector('.popup__figcaption');

//Кнопки
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-btn');
const likeButtons = document.querySelectorAll('.cards__like-button');
const plusButton = document.querySelector('.profile__plus-button');
const deleteButton = document.querySelectorAll('.cards__delete-btn');
//Темплейт
const cardsList = document.querySelector('.cards');
const cardsTemplate = document.querySelector('.cards-template').content;

//Переменные профиля
let nameContainer = document.querySelector('.profile__name');
let jobContainer = document.querySelector('.profile__description');
let inputName = popupForm.querySelector('.popup__input_type_name');
let inputJob = popupForm.querySelector('.popup__input_type_job');
//Переменные для попапа новой карточки
let inputPlace = popupFormNewPlace.querySelector('.popup__input_type_place');
let inputLink = popupFormNewPlace.querySelector('.popup__input_type_link');
let placeContainer = document.querySelector('.cards__caption');
let linkContainer = document.querySelector('.cards__image');




//Вызов попапа профиля (и перезапись его данных) при нажатии на кнопку edit
editButton.addEventListener('click', function(){
    inputName.value = nameContainer.textContent;
    inputJob.value = jobContainer.textContent;
    popupProfile.classList.add('popup_opened');
    
})

//Вызов попапа добавления карточек места при нажатии на кнопку плюс
plusButton.addEventListener('click', function(){
    popupPlace.classList.add('popup_opened');
})

//Функция закрытия попапов
function closePopup() {
    popup.forEach(item => {
        if (item.classList.contains('popup_opened')){
            item.classList.remove('popup_opened');
        }
    })
}

// Работа кнопок закрытия попапов
closeButtons.forEach(item => {
    item.addEventListener('click', event => {
        closePopup();
    })
})

//Функция нажатия на кнопки лайк 
function likingButton(event) {
  event.target.classList.toggle('like_active');
}


//Перезапись данных профиля при нажатии на 'Сохранить' или enter
popupForm.addEventListener('submit', function saveProfile(event) {
    event.preventDefault();
    nameContainer.textContent = inputName.value;
    jobContainer.textContent = inputJob.value;
    closePopup()
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
//Создание карточек
initialCards.forEach(element => {
    const cardsElement = cardsTemplate.cloneNode(true);
    cardsElement.querySelector('.cards__caption').textContent = element.name;
    cardsElement.querySelector('.cards__image').src = element.link;
    //Слушатели кнопок 
    //Like
    cardsElement.querySelector('.cards__like-button').addEventListener('click', event => {
      likingButton(event);
    })
    //Delete
    cardsElement.querySelector('.cards__delete-btn').addEventListener('click', event => {
      deleteCard(event);
    })
    //открытие попапа картинки при нажатии
    cardsElement.querySelector('.cards__image').addEventListener('click', (link) => {
      openFullCard(link);
      popupFigcaption.textContent = element.name;
    })
    //Добавление
    cardsList.append(cardsElement);
})

 
//Функция добавления новой карточки
function addNewCard(name, link) {
  const newCard = cardsTemplate.cloneNode(true);
  //Запись данных из инпутов в поля карточки
  //Поле названия
  const newCardCaption = newCard.querySelector('.cards__caption');
  name = inputPlace.value;
  newCardCaption.textContent = name;
  //Поле ссылки на картинку
  const newCardFigure = newCard.querySelector('.cards__image');
  link = inputLink.value;
  newCardFigure.src = link;
  //Слушатели кнопок 
  //Like
  newCard.querySelector('.cards__like-button').addEventListener('click', event => {
    likingButton(event);
  })
  //Delete
  newCard.querySelector('.cards__delete-btn').addEventListener('click', event => {
    deleteCard(event);
  })
  //открытие попапа картинки при нажатии
  newCard.querySelector('.cards__image').addEventListener('click', (event) => {
    openFullCard(event);
    popupFigcaption.textContent = name;
  })
  //Добавление
  cardsList.prepend(newCard);
  popupFormNewPlace.reset();
}

//Функция удаления карточки
function deleteCard(event){
  event.target.closest('.cards__list-item').remove();
}

//Добавление новой карточки при вводе данных и нажатии на 'Создать'/enter
popupFormNewPlace.addEventListener('submit', event => {
  event.preventDefault();
  addNewCard();
  closePopup();
})

//Вызов попапа карточки места при нажатии на эту карточку
function openFullCard(link){
  popupFullCard.classList.add('popup_opened');
  popupFigure.src = link.currentTarget.src;
}
