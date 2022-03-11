//для задания module7-task2

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterFieldset = mapFilter.querySelector('fieldset');
const mapFilterSelects = mapFilter.querySelectorAll('select');

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
  adFormFieldsets.forEach((item) => {item.disabled = true;});
  mapFilterFieldset.forEach((item) => {item.disabled = true;});
  mapFilterSelects.forEach((item) => {item.disabled = true;});
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
  adFormFieldsets.forEach((item) => {item.disabled = false;});
  mapFilterFieldset.forEach((item) => {item.disabled = false;});
  mapFilterSelects.forEach((item) => {item.disabled = false;});
};

export {deactivatePage, activatePage};
