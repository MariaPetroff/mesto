//Константы и переменные
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupForm = document.querySelector('.popup__form');
const closeButtons = document.querySelectorAll('.popup__close-btn');
const likeButtons = document.querySelectorAll('.cards__like-button');

const plusButton = document.querySelector('.profile__plus-button');

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
            console.log('close');
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

//нажатия на кнопки лайк
likeButtons.forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('like_active');
        console.log('like');
    })
})


//Перезапись данных при нажатии на 'Сохранить' или enter
popupForm.addEventListener('submit', function saveProfile(event) {
    event.preventDefault();
    nameContainer.textContent = inputName.value;
    jobContainer.textContent = inputJob.value;
    closePopup()
})
