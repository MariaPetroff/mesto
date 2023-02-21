//массив инпутов
const formProfileFields = Array.from(profileForm.querySelectorAll('.popup__input'));
const buttonSubmitFormProfile = profileForm.querySelector('.popup__submit-btn');

formProfileFields.forEach((elementField) => {
    const elementError = profileForm.querySelector(`.${elementField.id}-error`);

    elementField.addEventListener('input', (e) => {
        const field = e.target;
       
        const fieldIsValid = field.validity.valid;
        elementError.textContent = field.validationMessage;

        //Проверка на валидность отдельных полей формы
        if (!fieldIsValid) {
            field.classList.add('popup__input_type_invalid');
        } else {
            field.classList.remove('popup__input_type_invalid');
        }

        //Проверка на валидность всей формы
        const formIsValid = formProfileFields.every((item) => item.validity.valid);
        if (formIsValid) {
            buttonSubmitFormProfile.removeAttribute('disabled');
        } else {
            buttonSubmitFormProfile.setAttribute('disabled', 'disabled');
        }
    });
});

//Проверка на валидность отдельных полей формы
const checkFieldValidity = (field, elementError, ) => {
    if (!fieldIsValid) {
        showInputError(field);
    } else {
        hideInputError(field);
    }
}

//Добавление класса ошибки
const showInputError = (e) => {
    e.classList.add('popup__input_type_invalid');
    elementError.classList.add('popup__item-error_type_active');
}

//Удаление класса ошибки
const hideInputError = (e) => {
    e.classList.remove('popup__input_type_invalid');
    elementError.classList.remove('popup__item-error_type_active');
}



//Нажатие кнопки сабмит
const submitProfileHandler = (e) => {
    e.preventDefault();
    buttonSubmitFormProfile.setAttribute('disabled', 'disabled');

    const formIsValid = formProfileFields.every((item) => item.validity.valid);
        if (formIsValid) {
            const name = e.target.name.value; //
            const link = e.target.job.value; //

            closePopup(profileForm);


        }
}

profileForm.addEventListener('submit', submitProfileHandler);
