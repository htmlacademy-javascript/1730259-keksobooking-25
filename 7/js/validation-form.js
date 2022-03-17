import {adForm} from './change-page-form.js';

const ROOMS_AND_GUESTS = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const TYPES_HOUSES_AND_PRICES = {
  'Бунгало' : 0,
  'Квартира': 1000,
  'Отель' : 3000,
  'Дом' : 5000,
  'Дворец' : 10000,
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

const changeColorError = () => {
  const textElement = adForm.querySelectorAll('.ad-form__text-error');
  textElement.forEach((element) => {element.style.color = '#ff0000';});
};

const compareRooms = () => ROOMS_AND_GUESTS[numberRoom.value].includes(numberSeats.value);

const onChangeNumberSeats = () => {
  pristine.validate(numberSeats);
  changeColorError();
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

pristine.addValidator(numberRoom, compareRooms, getRoomsErrorMessages);
numberRoom.addEventListener('change', onChangeNumberSeats);

typesHousing.addEventListener('change', () => {
  pricesHousing.placeholder = TYPES_HOUSES_AND_PRICES[typesHousing.value];
  typesHousing.min = TYPES_HOUSES_AND_PRICES[pricesHousing.value];
});

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
    changeColorError();
  }
});
