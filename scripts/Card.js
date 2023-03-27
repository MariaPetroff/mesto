class Card {
    data;
    cardTemplate;
    cardElement;
    cardImage;
    cardName;
    likeButton;
    deleteButton;
  
    constructor(data) {
      this.data = data;
      
  
      this.getTemplate();
    }
  
  
    getTemplate() {
      this.cardTemplate = document.querySelector('.cards-template').content;
    } 
  
    createClassCard(link, name) {
      this.cardElement = this.cardTemplate.cloneNode(true);
  
      this.cardImage = this.cardElement.querySelector('.cards__image');
      this.cardImage.src = link;
      this.cardName = this.cardElement.querySelector('.cards__caption');
      this.cardName.textContent = name;
      this.cardImage.alt = name;
  
      // Кнопки like и delete
      this.likeButton = this.cardElement.querySelector('.cards__like-button');
      console.log(this.likeButton);
      this.deleteButton = this.cardElement.querySelector('.cards__delete-btn');
  
      //открытие попапа картинки при нажатии
      this.cardImage.addEventListener('click', event => {
        popupFigure.src = link;
        popupFigcaption.textContent = name;
        popupFigure.alt = name;
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