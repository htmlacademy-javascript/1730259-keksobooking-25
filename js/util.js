import {adForm, mapFilter} from './change-page-form.js';

const ESC_ALL_BROWSERS = 'Escape';
const ESC_IE = 'Esc';
const DELAY_TIME = 5000;
const RERENDER_DELAY = 500;

const submitButton = adForm.querySelector('.ad-form__submit');

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1000';
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '500px';
  alertContainer.style.right = '50%';
  alertContainer.style.transform = 'translateX(50%)';
  alertContainer.style.top = '55px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '18px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ff0000';
  alertContainer.style.color = '#000000';
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, DELAY_TIME);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикация...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const isEscEvent = (evt) => evt.key === ESC_ALL_BROWSERS || evt.key === ESC_IE;

const onFilterChange = (cb) => {

  mapFilter.addEventListener('change', () => {
    cb();
  });

  mapFilter.addEventListener('reset', () => {
    cb();
  });
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {blockSubmitButton, unblockSubmitButton, isEscEvent, showAlert, onFilterChange, debounce, RERENDER_DELAY};
