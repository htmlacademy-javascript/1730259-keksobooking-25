import {isEscEvent} from './util.js';

const onDocumentEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onClosesPopup();
  }
};

const onDocumentMousedown = (() => onClosesPopup());

const onClosesPopup = () => {
  document.querySelector('.popup').remove();
  removeHandlers();
};

const removeHandlers = () => {
  document.removeEventListener('mousedown', onDocumentMousedown);
  document.removeEventListener('keydown', onDocumentEscKeydown);
};

const createHandlers = () => {
  document.addEventListener('mousedown', onDocumentMousedown);
  document.addEventListener('keydown', onDocumentEscKeydown);
};

const openSuccessPopup = () => {
  const TemplateElement = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.append(TemplateElement);
  createHandlers();
};

const openErrorPopup = () => {
  const TemplateElement = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  document.body.append(TemplateElement);
  createHandlers();
};

export {openSuccessPopup, openErrorPopup};
