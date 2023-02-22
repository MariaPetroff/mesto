
//const enableValidation = (config) => {
//    const formList = Array.from(document.querySelectorAll(config.formSelector))
//    formList.forEach((formElement) => {
//        seteEventListeners(formElement)
//    })       
//}

const formList = Array.from(document.querySelectorAll('.popup__form'))
formList.forEach((formElement) => {
    const formFields = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonSubmit = formElement.querySelector('.popup__submit-btn');
    
    formFields.forEach((elementField) => {
        const elementError = formElement.querySelector(`.${elementField.id}-error`);
        
    
        elementField.addEventListener('input', (e) => {
            const field = e.target;
           
            const fieldIsValid = field.validity.valid;
            elementError.textContent = field.validationMessage;
            
    
            //Проверка на валидность отдельных полей формы
            if (!fieldIsValid) {
                field.classList.add('popup__input_type_invalid');
                elementError.classList.add('popup__item-error_type_active');
                buttonSubmit.classList.add('popup__submit-btn_type_disabled');
            } else {
                field.classList.remove('popup__input_type_invalid');
                elementError.classList.remove('popup__item-error_type_active');
            }
    
            //Проверка на валидность всей формы
            const formIsValid = formFields.every((item) => item.validity.valid);
            if (formIsValid) {
                buttonSubmit.removeAttribute('disabled');
                buttonSubmit.classList.remove('popup__submit-btn_type_disabled');
            } else {
                buttonSubmit.setAttribute('disabled', 'disabled');
                buttonSubmit.classList.add('popup__submit-btn_type_disabled');
            }
        });
        
               //Нажатие кнопки сабмит
//              const submitProfileHandler = (e) => {
//                    e.preventDefault();
//                    buttonSubmitFormProfile.setAttribute('disabled', 'disabled');
//
//                    const formIsValid = formFields.every((item) => item.validity.valid);
//                        if (formIsValid) {
                            //const name = e.target.name.value; //
                            //const link = e.target.job.value; //

//                            closePopup(formElement);
//                      }
//                }

//                formElement.addEventListener('submit', submitProfileHandler);

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
    buttonSubmitFormProfile.classList.add('popup__submit-btn_type_disabled');
}

//Удаление класса ошибки
const hideInputError = (e) => {
    e.classList.remove('popup__input_type_invalid');
    elementError.classList.remove('popup__item-error_type_active');
}


