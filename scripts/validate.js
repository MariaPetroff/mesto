//массив инпутов
const formProfileFields = Array.from(profileForm.querySelectorAll('.popup__input'));
const buttonSubmitFormProfile = profileForm.querySelector('.popup__submit-btn');

formProfileFields.forEach((elementField) => {
    const elementError = profileForm.querySelector(`.${elementField.id}-error`);

    elementField.addEventListener('input', (e) => {
        const field = e.target;
        console.log(field.validity);
        console.log(field.validationMessage);


        const fieldIsValid = field.validity.valid;
        elementError.textContent = field.validationMessage;

    })

})