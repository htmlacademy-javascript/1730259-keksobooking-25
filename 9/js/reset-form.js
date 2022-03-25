import {map, mainPinMarker, getAddress, CENTER_CITY_TOKYO, ZOOM_MAP} from './map.js';
import {adForm} from './change-page-form.js';
import {typesHousing, MIN_PRICE_HOUSING, numberRoom, pricesHousing, numberSeats, timeIn, timeOut} from './validation-form.js';
import {sliderElement} from './slider.js';

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
      min: MIN_PRICE_HOUSING['flat'],
      max: 100000,
    },
    start: MIN_PRICE_HOUSING['flat'],
  });
  pricesHousing.value = MIN_PRICE_HOUSING['flat'];
};

const resetTime = () => {
  timeIn.value = '12:00';
  timeOut.value = '12:00';
};

const resetForm = () => {
  resetPrice();
  resetTime();
  getAddress(CENTER_CITY_TOKYO);
  titleForm.value = '';
  description.value = '';
  typesHousing.value = 'flat';
  numberRoom.value = 1;
  numberSeats.value = 3;
  featuresCheckbox.forEach((value) => {
    value.checked = false;
  });
};

const getResetForm = () => {
  resetMainPin(mainPinMarker);
  resetForm();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  getResetForm();
});
