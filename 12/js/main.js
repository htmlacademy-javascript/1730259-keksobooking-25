import './slider.js';
import {createData} from './map.js';
import {getData} from './network.js';
import {showSuccessPopup, showErrorPopup} from './popup.js';
import {setUserFormSubmit} from './validation-form.js';
import {onFilterChange, debounce} from './util.js';

const RERENDER_DELAY = 500;

getData((dataUsers) => {
  createData(dataUsers);
  onFilterChange(debounce(
    () => createData(dataUsers),
    RERENDER_DELAY,
  ));
});

setUserFormSubmit(showSuccessPopup, showErrorPopup);
