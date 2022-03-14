const TRANSLATE_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const renderFeatures = (templateElement, elements) => {
  const featureList = templateElement.querySelectorAll('.popup__feature');
  featureList.forEach((featureItem) => {
    const isNecessary = elements.offer.features.some((features) => featureItem.classList.contains(`popup__feature--${features}`),
    );
    if (!isNecessary) {
      featureItem.remove();
    }
  });
};

/*Тебе надо очистить photoContainer и с помощью map создать из массива photoItems массив строк типа "<img src='адрес из текущего элемента массива' width height alt>", потом эти строки объединить в одну строку методом join и использовать insertAjacentHTML или innerHTML */

const renderPhotos = (templateElement, elements) => {
  const photoContainer = templateElement.querySelector('.popup__photos');
  let photoItem = photoContainer.querySelector('.popup__photo');
  const photoTemplateElement = photoItem.cloneNode(true);
  const photoItems = elements.offer.photos;
  photoContainer.innerHtml = '';
  console.log(photoItems);
  const newPhotosElements = photoItems.map((item) => {photoTemplateElement.src = item;});
  console.log(newPhotosElements);
  const combinePhotosElements = newPhotosElements.join('');
  console.log(combinePhotosElements);
  photoContainer.insertAdjacentHTML('beforeend', combinePhotosElements);
};

// const renderPhotos = (templateElement, elements) => {
//   const photoContainer = templateElement.querySelector('.popup__photos');
//   const photoItem = photoContainer.querySelector('.popup__photo');
//   const photoItems = elements.offer.photos;

//   photoItems.forEach((itemPhoto) =>{
//     const photoItemTemplate = photoItem.cloneNode(true);
//     photoItemTemplate.src = itemPhoto;
//     photoContainer.appendChild(photoItemTemplate);
//   });
//   photoItem.remove();
// };

const renderCard = (element) => {
  const templateElement = cardTemplate.cloneNode(true);
  templateElement.querySelector('.popup__title').textContent = element.offer.title;
  templateElement.querySelector('.popup__text--address').textContent = element.offer.address;
  templateElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  templateElement.querySelector('.popup__type').textContent = TRANSLATE_TYPES[element.offer.type];
  templateElement.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  templateElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  renderFeatures(templateElement, element);
  templateElement.querySelector('.popup__description').textContent = element.offer.description;
  renderPhotos(templateElement, element);
  templateElement.querySelector('.popup__avatar').src = element.author.avatar;
  mapCanvas.appendChild(templateElement);
};

export {renderCard};
