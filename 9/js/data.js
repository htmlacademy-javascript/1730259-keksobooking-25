import {getRandomNumberSimple, getRandomNumberFloat,getRandomElement} from './util.js';

const SIMILAR_AD_COUNT = 10;

const TITLES = [
  'Горячие новинки',
  'Бесплатная бронь',
  'Маленькая предоплата',
  'Без залога',
  'Возможность продления брони',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIMES = [
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

const LOCATION_LAT = {
  min: 35.65000,
  max: 35.70000,
  float: 5,
};

const LOCATION_LNG = {
  min: 139.70000,
  max: 139.80000,
  float: 5,
};

const PRICES = [
  100,
  100000,
];

const ROOMS = [
  1,
  10,
];

const QUESTS = [
  1,
  20,
];

const DESCRIPTIONS = [
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

const avatarNumbers = Array.from({ length: SIMILAR_AD_COUNT }, (v, i) => i + 1);

const avatarRandomNumbers = avatarNumbers.sort(() => Math.random() - 0.5);

const getAvatar = () => {
  const avatarRandom = avatarRandomNumbers.pop();

  if (avatarRandom < 10) {
    return `0${avatarRandom}`;
  }
  return avatarRandom;
};

const getLocationLat = () => getRandomNumberFloat(LOCATION_LAT.min, LOCATION_LAT.max, LOCATION_LAT.float);
const getLocationLng = () => getRandomNumberFloat(LOCATION_LNG.min, LOCATION_LNG.max, LOCATION_LNG.float);

const shuffle = (items ) => {
  const mixedData = items.sort(() => Math.random() - 0.5);
  return mixedData.slice(0, getRandomNumberSimple(1, items.length));
};

const generateNewItem = () => {
  const lat = getLocationLat();
  const lng = getLocationLng();

  return {
    author: {
      avatar: `img/avatars/user${getAvatar()}.png`,
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomElement(PRICES),
      type: getRandomElement(TYPES),
      rooms: getRandomElement(ROOMS),
      guests: getRandomElement(QUESTS),
      checkin: getRandomElement(TIMES),
      checkout: getRandomElement(TIMES),
      features: shuffle(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: shuffle(PHOTOS),
    },
    location: {
      lat,
      lng,
    },
  };
};

const generateNewUsers = (element) => Array.from({length: element}, generateNewItem);

export {generateNewUsers,generateNewItem, SIMILAR_AD_COUNT};
