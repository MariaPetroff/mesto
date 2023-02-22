//Ф-ции вызова и скрытия ошибки
const showInputError = (formElement, fieldElement, config) => {
    const errorElement = formElement.querySelector(`.${fieldElement.id}-error`);

    errorElement.classList.add(config.errorClass);
    errorElement.textContent = fieldElement.validationMessage;
    fieldElement.classList.add(config.inputErrorClass);
}

const hideInputError = (formElement, fieldElement, config) => {
    const errorElement = formElement.querySelector(`.${fieldElement.id}-error`);

    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
    fieldElement.classList.remove(config.inputErrorClass);
}

//Проверка на валидность отдельных полей формы
const checkFieldValidity = (formElement, fieldElement, config) => {
    if (fieldElement.validity.valid) {
        hideInputError(formElement, fieldElement, config);
    } else {
        showInputError(formElement, fieldElement, config);
    }
}

const hasInvalidField = (formFields) => {
        //Проверка на валидность всех полей формы
    return formFields.some((field) => !field.validity.valid);//возвращает true, если хотя бы одно поле невалидно
}

//(Де-)активация кнопки сабмита
const toggleButtonState = (formFields, buttonSubmit, config) => {
    if (hasInvalidField(formFields)) {
        buttonSubmit.classList.add(config.inactiveButtonClass);
        buttonSubmit.setAttribute('disabled', 'disabled');
    } else {
        buttonSubmit.removeAttribute('disabled');
        buttonSubmit.classList.remove(config.inactiveButtonClass);
    }
}

const setEventListeners = (formElement, config) => {
    //Все поля инпутов
    const formFields = Array.from(formElement.querySelectorAll(config.inputSelector));
    //Кнопка сохранения
    const buttonSubmit = formElement.querySelector(config.submitButtonSelector);
    
    toggleButtonState(formFields, buttonSubmit, config); //Чтобы выключить кнопку при невалидных инпутах до ввода пользователем

    //На каждое поле обработчик валидности
    formFields.forEach((fieldElement) => {
        fieldElement.addEventListener('input', () => {
            checkFieldValidity(formElement, fieldElement, config);
            toggleButtonState(formFields, buttonSubmit, config);
        })
    })
}



const enableValidation = (config) => {
    //все формы
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((formElement) => {
        //Навешивание обработчиков на каждую отдельную форму
        setEventListeners(formElement, config);
    })   
}