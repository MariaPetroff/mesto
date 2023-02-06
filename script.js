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

//Кнопки
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-btn');
const likeButtons = document.querySelectorAll('.cards__like-button');
const plusButton = document.querySelector('.profile__plus-button');
const deleteButtons = document.querySelectorAll('.cards__delete-btn');
//Темплейт
const cardsList = document.querySelector('.cards');
const cardsTemplate = document.querySelector('.cards-template').content;

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
function openPopup(item) {
  item.classList.add('popup_opened');
}

//Функция закрытия попапов
function closePopup(item) {
  item.classList.remove('popup_opened');
}

// Работа кнопок закрытия попапов
closeButtons.forEach(item => {
    const popup = item.closest('.popup');
    item.addEventListener('click', event => {
        closePopup(popup);
    })
})

//Функция нажатия на кнопки лайк 
function toggleLike(event) {
  event.target.classList.toggle('like_active');
}


//Перезапись данных профиля при нажатии на 'Сохранить' или enter
profileForm.addEventListener('submit', function saveProfile(event) {
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
//Создание изначальных карточек из массива
function renderCards(items) {
    const cardsElements = items.map((element) => {
      return createCard(element);
    })
    
    //Добавление
    cardsList.append(...cardsElements);
}
renderCards(initialCards);

 
//Функция создания новой карточки
function createNewCard() {
  const name = inputPlace.value;
  const link = inputLink.value;
  link.alt = name;

  const newCard = createCard ({name: name, link: link});

  return newCard;
}

//Функция создания каркаса карточки
function createCard (element) {
  const cardsElement = cardsTemplate.cloneNode(true);
    cardsElement.querySelector('.cards__caption').textContent = element.name;
    const cardImage = cardsElement.querySelector('.cards__image');
    cardImage.src = element.link;
    cardImage.alt = element.name;
    //Слушатели кнопок 
    //Like
    cardsElement.querySelector('.cards__like-button').addEventListener('click', event => {
      toggleLike(event);
    })
    //Delete
    cardsElement.querySelector('.cards__delete-btn').addEventListener('click', event => {
      deleteCard(event);
    })
    //открытие попапа картинки при нажатии
    cardImage.addEventListener('click', event => {
      popupFigure.src = element.link;
      popupFigcaption.textContent = element.name;
      popupFigure.alt = element.name;
      openPopup(popupFullCard);
    })

    return cardsElement;
}

function addNewCard(name, link) {
  cardsList.prepend(createNewCard(name, link));
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
  popupFormNewPlace.reset();
})


