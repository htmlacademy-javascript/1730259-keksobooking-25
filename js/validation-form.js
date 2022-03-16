import {adForm} from './change-page-form.js';

const pristine = new Pristine (adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form--invalid',
  successClass: 'ad-form--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__text-error'
}, true);

const numberRoom = adForm.querySelector('[name="rooms"]');
const numberSeats = adForm.querySelector('[name="capacity"]');

const ROOMS_AND_QUESTS = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const compareRooms = () => ROOMS_AND_QUESTS[numberRoom.value].includes(numberSeats.value);

const ChangeNumberSeats = () => {
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

pristine.addValidator(numberRoom, compareRooms, getRoomsErrorMessages);
pristine.addValidator(numberSeats, compareRooms, getRoomsErrorMessages);
numberRoom.addEventListener('change', ChangeNumberSeats);

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
