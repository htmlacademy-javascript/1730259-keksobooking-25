import './slider.js';
import {createData} from './map.js';
// import {SIMILAR_AD_COUNT} from './data.js';
import {getData} from './network.js';
import {showSuccessPopup, showErrorPopup} from './popup.js';
import {setUserFormSubmit} from './validation-form.js';
import {activateFilters} from './change-page-form.js';
import './filters.js';

activateFilters();

getData((dataUsers) => createData(dataUsers/*.slice(0, SIMILAR_AD_COUNT)*/));

setUserFormSubmit(showSuccessPopup, showErrorPopup);
