const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterFieldset = mapFilter.querySelectorAll('fieldset');
const mapFilterSelects = mapFilter.querySelectorAll('select');

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormFieldsets.forEach((item) => {item.disabled = true;});
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach((item) => {item.disabled = false;});
};

const diactivateFilters =() => {
  mapFilter.classList.add('map__filters--disabled');
  mapFilterFieldset.forEach((item) => {item.disabled = true;});
  mapFilterSelects.forEach((item) => {item.disabled = true;});
};

const activateFilters = () => {
  mapFilter.classList.remove('map__filters--disabled');
  mapFilterFieldset.forEach((item) => {item.disabled = false;});
  mapFilterSelects.forEach((item) => {item.disabled = false;});
};

export {adForm, mapFilter, deactivateForm, activateForm, diactivateFilters, activateFilters};
