const editButton = document.querySelector('.profile__pseudo-item_button_edit');
const popup = document.querySelector('.popup');
let likeButton = document.querySelectorAll('.cards__pdeudo-item_button_like');
console.log(editButton, popup, likeButton);


editButton.addEventListener('click', function(){
    console.log('click edit');
    popup.classList.add('popup_opened');
})

for(let i=0; i < likeButton.length; i+=1 ) {
    likeButton[i].addEventListener('click', function(){
        console.log('click like');
        likeButton[i].classList.toggle('like_active');
    });
}
