const SIMILAR_AD_COUNT = 10;

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

const avatarNumbers = Array.from({ length: SIMILAR_AD_COUNT }, (v, i) => i + 1);

const avatarRandomNumbers = avatarNumbers.sort(() => Math.random() - 0.5);

const getAvatar = () => {
  let avatarRandom = avatarRandomNumbers.pop();

  if (avatarRandom < 10) {
    avatarRandom = `0${String(avatarRandom)}`;
    return avatarRandom;
  }
  return avatarRandom;
};

const getRandomElements = (element) => element[getRandomNumberSimple(0, element.length - 1)];

const getLocationLat = () => getRandomNumberFloat(35.65000, 35.70000, 5);
const getLocationLng = () => getRandomNumberFloat(139.70000, 139.80000, 5);

const getPrice = () => getRandomNumberSimple(100,100000);

const getRooms = () => getRandomNumberSimple(1, 10);

const getQuests = () => getRandomNumberSimple(1, 20);

const newAddItem = () => {
  const lat = getLocationLat();
  const lng = getLocationLng();

  return {
    autor: {
      avatar: `img/avatars/user${getAvatar()}.png`,
    },
    offer: {
      title: getRandomElements(TITLE),
      adress: `${lat}, ${lng}`,
      price: getPrice(),
      type: getRandomElements(TYPE),
      rooms: getRooms(),
      guests: getQuests(),
      checkin: getRandomElements(CHECK_TIME),
      checkout: getRandomElements(CHECK_TIME),
      features: getRandomElements(FEATURES),
      description: getRandomElements(DESCRIPTION),
      photos: getRandomElements(PHOTOS),
    },
    location: {
      lat,
      lng,
    },
  };
};

const similarItems = () => Array.from({length: SIMILAR_AD_COUNT}, newAddItem);

similarItems();
