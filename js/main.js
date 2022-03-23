import {generateNewUsers, SIMILAR_AD_COUNT} from './data.js';
// import {renderCard} from './card.js';
import {deactivatePage, activatePage} from './change-page-form.js';
import './validation-form.js';
import './slider.js';
import './map.js';

const generationData = generateNewUsers(SIMILAR_AD_COUNT);

// renderCard(generationData[0]);

deactivatePage();
activatePage();

export {generationData};
