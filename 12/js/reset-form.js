import {timeIn, timeOut, typesHousing, MIN_PRICE_HOUSING, numberRoom, pricesHousing, numberSeats} from './validation-form.js';
import {map, mainPinMarker, getAddress, CENTER_CITY_TOKYO, ZOOM_MAP} from './map.js';
import {adForm} from './change-page-form.js';
import {sliderElement, RANGE_MIN, RANGE_MAX} from './slider.js';
import {filterHouse, filterPrice, filterRooms, filterGuests, filterFeatures} from './filters.js';
import {resetPicture} from './pictures.js';

const Default = {
  TIME: '12:00',
  TIPE_CHANGE: 'any',
  TIPE_INPUT: '',
  TIPE_HOUSE: 'flat',
  NUMBERS_ROOM: 1,
  NUMBERS_SEAT: 3,
};

const resetButton = adForm.querySelector('.ad-form__reset');
const titleForm = adForm.querySelector('#title');
const description = adForm.querySelector('#description');
const featuresCheckbox = adForm.querySelectorAll('.features__checkbox');

const resetMainPin = (marker) => {
  marker.setLatLng(CENTER_CITY_TOKYO);
  map.setView(CENTER_CITY_TOKYO, ZOOM_MAP);
};

const resetPrice = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: RANGE_MIN,
      max: RANGE_MAX,
    },
    start: pricesHousing.placeholder,
  });
  pricesHousing.value = MIN_PRICE_HOUSING['flat'];
};

const resetTime = () => {
  timeIn.value = Default.TIME;
  timeOut.value = Default.TIME;
};
const checkboxReset = (element) => {
  element.forEach((value) => {
    value.checked = false;
  });
};

const resetForm = () => {
  resetPrice();
  resetTime();
  getAddress(CENTER_CITY_TOKYO);
  filterHouse.value = Default.TIPE_CHANGE;
  filterPrice.value = Default.TIPE_CHANGE;
  filterRooms.value= Default.TIPE_CHANGE;
  filterGuests.value = Default.TIPE_CHANGE;
  titleForm.value = Default.TIPE_INPUT;
  description.value = Default.TIPE_INPUT;
  typesHousing.value = Default.TIPE_HOUSE;
  numberRoom.value = Default.NUMBERS_ROOM;
  numberSeats.value = Default.NUMBERS_SEAT;
  checkboxReset(featuresCheckbox);
  checkboxReset(filterFeatures);
  resetPicture();
};

const getResetForm = () => {
  resetMainPin(mainPinMarker);
  resetForm();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  getResetForm();
});

export {getResetForm, filterHouse, filterPrice, filterRooms, filterGuests, filterFeatures, Default};
