import {timeIn, timeOut, typesHousing, MIN_PRICE_HOUSING, numberRoom, pricesHousing, numberSeats} from './validation-form.js';
import {map, mainPinMarker, getAddress, CENTER_CITY_TOKYO, ZOOM_MAP} from './map.js';
import {adForm, mapFilter} from './change-page-form.js';
import {sliderElement, RANGE_MIN, RANGE_MAX} from './slider.js';
import {TIMES} from './data.js';

const resetButton = adForm.querySelector('.ad-form__reset');
const titleForm = adForm.querySelector('#title');
const description = adForm.querySelector('#description');
const featuresCheckbox = adForm.querySelectorAll('.features__checkbox');
const filterHouse = mapFilter.querySelector('[name="housing-type"]');
const filterPrice = mapFilter.querySelector('[name="housing-price"]');
const filterRooms = mapFilter.querySelector('[name="housing-rooms"]');
const filterGuests = mapFilter.querySelector('[name="housing-guests"]');
const filterFeatures = mapFilter.querySelectorAll('.map__checkbox');

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
  timeIn.value = TIMES[0];
  timeOut.value = TIMES[0];
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
  filterHouse.value = 'any';
  filterPrice.value = 'any';
  filterRooms.value= 'any';
  filterGuests.value = 'any';
  titleForm.value = '';
  description.value = '';
  typesHousing.value = 'flat';
  numberRoom.value = 1;
  numberSeats.value = 3;
  checkboxReset(featuresCheckbox);
  checkboxReset(filterFeatures);
};

const getResetForm = () => {
  resetMainPin(mainPinMarker);
  resetForm();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  getResetForm();
});

export {getResetForm};
