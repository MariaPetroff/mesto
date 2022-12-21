
const editButton = document.querySelector('.profile__pseudo-item_button_edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__pseudo-item_btn_close');
let likeButton = document.querySelectorAll('.cards__pdeudo-item_button_like');

//Открытие и закрытие попапа
editButton.addEventListener('click', function(){
    console.log('click edit');
    popup.classList.add('popup_opened');
})


function closePopup(){
    console.log('click close');
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

//нажатие на кнопки лайк
for(let i=0; i < likeButton.length; i+=1 ) {
    likeButton[i].addEventListener('click', function(){
        console.log('click like');
        likeButton[i].classList.toggle('like_active');
    });
}

//Перезапись данных при нажатии кнопки 'Сохранить'
let nameContainer = document.querySelector('.profile__name');
let jobContainer = document.querySelector('.profile__description');
const submitButton = document.querySelector('.popup__pdeudo-item_btn_submit');

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    let name = document.querySelector('.popup__text_name');
    let job = document.querySelector('.popup__text_job');
    let namePlaceholder = document.querySelector('.popup__text_name');
    let jobPlaceholder = document.querySelector('.popup__text_job');

    nameContainer.innerHTML = `
    <h1 class="profile__name">${name.value}</h1>
    `;
    jobContainer.innerHTML =`
    <p class="profile__description">${job.value}</p>
    `;

    namePlaceholder.innerHTML = `
    <input type="text" placeholder="${name.value}" class="popup__text popup__text_name" id="popup-name">
    `;
    jobPlaceholder.innerHTML = `
    <input type="text" placeholder="${job.value}" class="popup__text popup__text_job" id="popup-job">
    `;
    closePopup();
});