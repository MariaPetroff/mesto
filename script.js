//Константы и переменные
//Попапы и им сочувствующие
const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupForm = document.querySelector('.popup__form');
//Кнопки
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-btn');
const likeButtons = document.querySelectorAll('.cards__like-button');
const plusButton = document.querySelector('.profile__plus-button');
//Темплейт
const cardsList = document.querySelector('.cards');
const cardsTemplate = document.querySelector('.cards-template').content;
//Переменные
let nameContainer = document.querySelector('.profile__name');
let jobContainer = document.querySelector('.profile__description');
let inputName = popupForm.querySelector('.popup__input_type_name');
let inputJob = popupForm.querySelector('.popup__input_type_job');





//Вызов попапа профиля (и перезапись его данных) при нажатии на кнопку edit
editButton.addEventListener('click', function(){
    inputName.value = nameContainer.textContent;
    inputJob.value = jobContainer.textContent;
    popupProfile.classList.add('popup_opened');
    
})

//Вызов попапа добавления карточки места при нажатии на кнопку плюс
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

//нажатие на кнопки лайк без template эл-тов
//likeButtons.forEach(item => {
//    item.addEventListener('click', event => {
//        item.classList.toggle('like_active');
//    })
//})


//Перезапись данных при нажатии на 'Сохранить' или enter
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


initialCards.forEach(element => {
    const cardsElement = cardsTemplate.cloneNode(true);
    cardsElement.querySelector('.cards__caption').textContent = element.name;
    cardsElement.querySelector('.cards__image').src = element.link;
    cardsElement.querySelector('.cards__like-button').addEventListener('click', event => {
        event.target.classList.toggle('like_active');
        console.log('like');
    })
 
    cardsList.append(cardsElement);
})