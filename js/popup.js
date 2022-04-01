import {isEscEvent} from './util.js';

const successPopup = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorPopup = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const closeErrorButton = errorPopup.querySelector('.error__button');

const removePopapListener = (element, onKeydownHandler) => {
  element.remove();
  document.removeEventListener('keydown', onKeydownHandler);
};

const showSuccessPopup = () => {
  document.body.appendChild(successPopup);
  const onKeydownHandler = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      removePopapListener(successPopup);
    }
  };
  document.addEventListener('keydown', onKeydownHandler);
  successPopup.addEventListener('click', () => {
    removePopapListener(successPopup);
  });
};

const showErrorPopup = () => {
  document.body.appendChild(errorPopup);
  const onKeydownHandler = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      removePopapListener(errorPopup);
    }
  };
  document.addEventListener('keydown', onKeydownHandler);
  closeErrorButton.addEventListener('click', () => {
    removePopapListener(errorPopup);
  });
  errorPopup.addEventListener('click', () => {
    removePopapListener(errorPopup);
  });
};

export {showSuccessPopup, showErrorPopup};
