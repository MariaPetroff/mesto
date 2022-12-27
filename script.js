//Константы и переменные
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const closeButton = document.querySelector('.popup__close-btn');
let likeButton = document.querySelectorAll('.cards__like-button');

let nameContainer = document.querySelector('.profile__name');
let jobContainer = document.querySelector('.profile__description');
let inputName = popupForm.querySelector('.popup__input_type_name');
let inputJob = popupForm.querySelector('.popup__input_type_job');



//Открытие и закрытие попапа
editButton.addEventListener('click', function openPopup(){
    inputName.value = nameContainer.textContent;
    inputJob.value = jobContainer.textContent;
    popup.classList.add('popup_opened');
})

function closePopup(){
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

//нажатие на кнопки лайк
for(let i=0; i < likeButton.length; i+=1 ) {
    likeButton[i].addEventListener('click', function(){
        likeButton[i].classList.toggle('like_active');
    });
}

//Перезапись данных при нажатии на 'Сохранить' или enter
popupForm.addEventListener('submit', function saveProfile(event) {
    event.preventDefault();
    nameContainer.textContent = inputName.value;
    jobContainer.textContent = inputJob.value;
    closePopup()
})
