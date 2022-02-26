const SIMILAR_AD_COUNT = 10;

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TITLE = [
  'Горячие новинки',
  'Бесплатная бронь',
  'Маленькая предоплата',
  'Без залога',
  'Возможность продления брони',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Кондиционер',
  'Сейф для личных вещей',
  'Бесплатная парковка',
  'Не далеко от парка',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomNumberSimple = (numberFrom, numberNext) => {
  if (numberFrom >= 0 && numberNext >= 0 && numberFrom < numberNext) {
    const numberMin = Math.ceil(numberFrom);
    const numberMax = Math.floor(numberNext);
    const randomSimple = Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
    return Number(randomSimple);
  }
  throw new TypeError('Некоректно указанны данные');
};

const getRandomNumberFloat = (numberFrom, numberNext, numberFloat = 0) => {
  if (numberFrom >= 0 && numberNext >= 0 && numberFrom < numberNext && numberFloat >= 0) {
    const randomFloat = (Math.random() * (numberNext - numberFrom) + numberFrom).toFixed(numberFloat);
    return Number(randomFloat);
  }
  throw new TypeError('Некоректно указанны данные');
};

const getRandomElements = (element) => element[getRandomNumberSimple(0, element.length - 1)];

const newAdd = () => {
  const lat = getRandomNumberFloat(35.65000, 35.70000, 5);
  const lng = getRandomNumberFloat(139.70000, 139.80000, 5);

  return {
    autor: {
      avatar: getRandomElements(AVATAR),
    },
    offer: {
      title: getRandomElements(TITLE),
      adress: {
        lat,
        lng,
      },
      price: getRandomNumberSimple(100,100000),
      type: getRandomElements(TYPE),
      rooms: getRandomNumberSimple(1, 10),
      guests: getRandomNumberSimple(1, 20),
      checkin: getRandomElements(CHECK_TIME),
      checkout: getRandomElements(CHECK_TIME),
      features: getRandomElements(FEATURES),
      description: getRandomElements(DESCRIPTION),
      photos: getRandomElements(PHOTOS),
      location: {
        lat,
        lng,
      },
    },
  };
};

newAdd();

/*
В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

Структура каждого объекта должна быть следующей:

  author, объект — описывает автора. Содержит одно поле:

  avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
  offer, объект — содержит информацию об объявлении. Состоит из полей:

 title, строка — заголовок предложения. Придумайте самостоятельно.

 address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

 price, число — стоимость. Случайное целое положительное число.

 type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

 rooms, число — количество комнат. Случайное целое положительное число.

 guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

 checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

 checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

 features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

 description, строка — описание помещения. Придумайте самостоятельно.

 photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

 location, объект — местоположение в виде географических координат. Состоит из двух полей:

 lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

 lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
*/
