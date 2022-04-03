import {timeIn, timeOut, typesHousing, MIN_PRICE_HOUSING, numberRoom, pricesHousing, numberSeats} from './validation-form.js';
import {map, mainPinMarker, getAddress, CENTER_CITY_TOKYO, ZOOM_MAP} from './map.js';
import {adForm, mapFilter} from './change-page-form.js';
import {sliderElement, RANGE_MIN, RANGE_MAX} from './slider.js';

const Default = {
  TIME: '12:00',
  TIPES = [
    'any',
    '',
    'flat',
  ],
  NUMBERS = [
    1,
    3,
  ],
};

const resetButton = adForm.querySelector('.ad-form__reset');
const titleForm = adForm.querySelector('#title');
const description = adForm.querySelector('#description');
const featuresCheckbox = adForm.querySelectorAll('.features__checkbox');
const filterHouse = mapFilter.querySelector('[name="housing-type"]');
const filterPrice = mapFilter.querySelector('[name="housing-price"]');
const filterRooms = mapFilter.querySelector('[name="housing-rooms"]');
const filterGuests = mapFilter.querySelector('[name="housing-guests"]');
const filterFeatures = mapFilter.querySelectorAll('#map__features');

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
  filterHouse.value = Default.TIPES[0];
  filterPrice.value = Default.TIPES[0];
  filterRooms.value= Default.TIPES[0];
  filterGuests.value = Default.TIPES[0];
  titleForm.value = Default.TIPES[1];
  description.value = Default.TIPES[1];
  typesHousing.value = Default.TIPES[2];
  numberRoom.value = Default.NUMBERS[0];
  numberSeats.value = Default.NUMBERS[1];
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

export {getResetForm, filterHouse, filterPrice, filterRooms, filterGuests, filterFeatures, Default};
