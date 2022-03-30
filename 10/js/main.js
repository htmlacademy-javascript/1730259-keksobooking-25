import {setUserFormSubmit} from './validation-form.js';
import './slider.js';
import {createData} from './map.js';
import {SIMILAR_AD_COUNT} from './data.js';
import {getData} from './network.js';
import {openSuccessPopup, openErrorPopup} from './popup.js';

getData((dataUsers) => createData(dataUsers.slice(0, SIMILAR_AD_COUNT)));

setUserFormSubmit(openSuccessPopup, openErrorPopup);
