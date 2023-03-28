class Card {
    data;
    cardTemplate;
    cardElement;
    cardImage;
    cardName;
    likeButton;
    deleteButton;
  
    constructor({link, name}) {
      //this.data = data;
      this._link = link;
      this._name = name;
  
      this.getTemplate();
    }
  
  
    getTemplate() {
      this.cardTemplate = document.querySelector('.cards-template').content;
    } 
  
    createClassCard() {
      this.cardElement = this.cardTemplate.cloneNode(true);
  
      this.cardImage = this.cardElement.querySelector('.cards__image');
      this.cardImage.src = this._link;
      this.cardName = this.cardElement.querySelector('.cards__caption');
      this.cardName.textContent = this._name;
      this.cardImage.alt = this._name;
  
      // Кнопки like и delete
      this.likeButton = this.cardElement.querySelector('.cards__like-button');
      console.log(this.likeButton);
      this.deleteButton = this.cardElement.querySelector('.cards__delete-btn');
  
      //открытие попапа картинки при нажатии
      this.cardImage.addEventListener('click', () => {
        popupFigure.src = this._link;
        popupFigcaption.textContent = this._name;
        popupFigure.alt = this._name;
        openPopup(popupFullCard);
      })
  
      this.setListeners();
  
      return this.cardElement;
    }
  
    deleteCard() {
      this.deleteButton.closest('.cards__list-item').remove();
    }
  
    toggleLike() {
      this.likeButton.classList.toggle('like_active');
    }
  
    //метод для слушателей кнопок
    setListeners() {
        //Like
      this.likeButton.addEventListener('click', () => {
        this.toggleLike();
      })
      //Delete
      this.deleteButton.addEventListener('click', () => {
        this.deleteCard();
      })
    }
  
  }

export {Card};