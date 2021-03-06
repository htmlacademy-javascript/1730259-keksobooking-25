import {adForm} from './change-page-form.js';
import {blockSubmitButton, unblockSubmitButton} from './util.js';
import {getResetForm} from './reset-form.js';
import {sendData} from './network.js';

const TYPES_NUMBER = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const MIN_PRICE = {
  'bungalow' : 0,
  'flat': 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

const numberRoom = adForm.querySelector('[name="rooms"]');
const numberSeats = adForm.querySelector('[name="capacity"]');
const typesHousing = adForm.querySelector('[name="type"]');
const pricesHousing = adForm.querySelector('[name="price"]');
const timeIn = adForm.querySelector('[name="timein');
const timeOut = adForm.querySelector('[name="timeout"]');
const timeForm = adForm.querySelector('.ad-form__element--time');

pricesHousing.removeAttribute('min');
pricesHousing.removeAttribute('required');

const pristine = new Pristine (adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form--invalid',
  successClass: 'ad-form--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__text-error'
}, true);


const validatePrise = () => pricesHousing.value >= MIN_PRICE[typesHousing.value];

typesHousing.addEventListener('change', () => {
  pricesHousing.placeholder = MIN_PRICE[typesHousing.value];
  pricesHousing.min = MIN_PRICE[typesHousing.value];
});

const onTypeFormChange = () => {
  pristine.validate(pricesHousing);
};

const getPriceErrorMessage = () => `Минимальная цена ${MIN_PRICE[typesHousing.value]} руб.`;

const compareRooms = () => TYPES_NUMBER[numberRoom.value].includes(numberSeats.value);

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

const onSwitchTime = (element) => {
  timeOut.value = element.target.value;
  timeIn.value = element.target.value;
};

pristine.addValidator(numberRoom, compareRooms, getRoomsErrorMessages);
numberRoom.addEventListener('change', onChangeNumberSeats);
pristine.addValidator(pricesHousing, validatePrise, getPriceErrorMessage);
typesHousing.addEventListener('change', onTypeFormChange);
timeForm.addEventListener('change', (element) => onSwitchTime(element));

const setUserFormSubmit = (onSuccess, onFail) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          getResetForm();
        },
        () => {
          onFail();
          unblockSubmitButton();
        },
        new FormData(evt.target)
      );
    }
  });
};

export {MIN_PRICE, numberRoom, pricesHousing, typesHousing, numberSeats, timeIn, timeOut, setUserFormSubmit};
