import {adForm} from './change-page-form.js';

const ROOMS_AND_GUESTS = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const numberRoom = adForm.querySelector('[name="rooms"]');
const numberSeats = adForm.querySelector('[name="capacity"]');
const typesHousing = adForm.querySelector('[name="type"]');
const pricesHousing = adForm.querySelector('[name="price"]');

const pristine = new Pristine (adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form--invalid',
  successClass: 'ad-form--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__text-error'
}, true);

const compareRooms = () => ROOMS_AND_GUESTS[numberRoom.value].includes(numberSeats.value);

const onChangeNumberSeats = () => {
  pristine.validate(numberSeats);
};

const getRoomsErrorMessages = () => {
  switch (numberRoom.value) {
    case '1':
      return 'Для 1 Гостя';
    case '2':
      return 'Максимум 2 гостя';
    case '3':
      return 'Максимум 3 гостя';
    case '100':
      return 'Не для гостей';
  }
};

const MIN_PRICE_HOUSING = {
  'bungalow' : 0,
  'flat': 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

const validatePrise = () => pricesHousing.value >= MIN_PRICE_HOUSING[typesHousing.value];

typesHousing.addEventListener('change', () => {
  pricesHousing.placeholder = MIN_PRICE_HOUSING[typesHousing.value];
  pricesHousing.min = MIN_PRICE_HOUSING[typesHousing.value];
});

const onTypeFormChange = () => {
  pristine.validate(pricesHousing);
};

const getPriceErrorMessage = () => `Минимальная цена ${MIN_PRICE_HOUSING[typesHousing.value]} руб.`;

pristine.addValidator(numberRoom, compareRooms, getRoomsErrorMessages);
numberRoom.addEventListener('change', onChangeNumberSeats);
pristine.addValidator(pricesHousing, validatePrise, getPriceErrorMessage);
typesHousing.addEventListener('change', onTypeFormChange);

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
