import {adForm} from './change-page-form.js';

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form--invalid',
  successClass: 'ad-form--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__text-error',
}, false
);

const validationTitles = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(
  adForm.querySelector('#title'),
  validationTitles,
  'От 30 до 100 символов'
);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
