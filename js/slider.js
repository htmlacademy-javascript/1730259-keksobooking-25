import {pricesHousing, typesHousing} from './validation-form.js';
import {adForm} from './change-page-form.js';

const sliderElement = adForm.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: pricesHousing.placeholder,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
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
