import './slider.js';
import {createData} from './map.js';
import {getData} from './network.js';
import {showSuccessPopup, showErrorPopup} from './popup.js';
import {setUserFormSubmit} from './validation-form.js';
import {activateFilters} from './change-page-form.js';
import {onFilterChange} from './util.js';


activateFilters();

getData((dataUsers) => {
  createData(dataUsers);
  onFilterChange(() => createData(dataUsers));
});

setUserFormSubmit(showSuccessPopup, showErrorPopup);
