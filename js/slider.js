import {pricesHousing, typesHousing} from './validation-form.js';
import {adForm} from './change-page-form.js';

const RANGE_MIN = 0;
const RANGE_MAX = 100000;
const RANGE_STEP = 1;

const sliderElement = adForm.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: RANGE_MIN,
    max: RANGE_MAX,
  },
  start: pricesHousing.placeholder,
  step: RANGE_STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  pricesHousing.value = sliderElement.noUiSlider.get();
});

pricesHousing.addEventListener('change', () => sliderElement.noUiSlider.set(pricesHousing.value));
typesHousing.addEventListener('change', () => sliderElement.noUiSlider.set(pricesHousing.placeholder));

export {sliderElement, RANGE_MIN, RANGE_MAX};
