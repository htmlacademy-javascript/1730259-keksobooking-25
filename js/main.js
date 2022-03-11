import {generateNewUsers, SIMILAR_AD_COUNT} from './data.js';
import {renderCard} from './card.js';

const generationData = generateNewUsers(SIMILAR_AD_COUNT);

renderCard(generationData[0]);

export {generationData};
