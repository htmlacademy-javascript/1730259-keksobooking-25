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

const LOCATIONLAT = {
  min: 35.65000,
  max: 35.70000,
  float: 5,
};

const LOCATIONLNG = {
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

const getRandomElement = (element) => element[getRandomNumberSimple(0, element.length - 1)];

const getLocationLat = () => getRandomNumberFloat(LOCATIONLAT.min, LOCATIONLAT.max, LOCATIONLAT.float);
const getLocationLng = () => getRandomNumberFloat(LOCATIONLNG.min, LOCATIONLNG.max, LOCATIONLNG.float);

// features
const getRandomArray = (element) => {
  const randomArray = element.sort(() => Math.random() - 0.5);
  const createrandomArray = randomArray.slice(0, getRandomNumberSimple(1, element.length));
  return createrandomArray;
};

const newAddItem = () => {
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
      features: getRandomArray(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat,
      lng,
    },
  };
};

const similarItems = () => Array.from({length: SIMILAR_AD_COUNT}, newAddItem);

similarItems();
