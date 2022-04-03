import {Default} from './reset-form.js';
import {mapFilter} from './change-page-form.js';

const Price = {
  MIN_PRICE: 10000,
  MAX_PRICE: 50000,
};

const filterHouse = mapFilter.querySelector('[name="housing-type"]');
const filterPrice = mapFilter.querySelector('[name="housing-price"]');
const filterRooms = mapFilter.querySelector('[name="housing-rooms"]');
const filterGuests = mapFilter.querySelector('[name="housing-guests"]');
const filterFeatures = mapFilter.querySelectorAll('.map__checkbox');

const chooseHouses = (element) => filterHouse.value === Default.TIPE_CHANGE || element.offer.type === filterHouse.value;
const chooseRooms = (element) => filterRooms.value === Default.TIPE_CHANGE || element.offer.rooms === +filterRooms.value;
const chooseGuests = (element) => filterGuests.value === Default.TIPE_CHANGE || element.offer.guests === +filterGuests.value;

const choosePrices = (element) => {
  switch (filterPrice.value) {
    case 'low' : return element.offer.price < Price.MIN_PRICE;
    case 'middle': return element.offer.price >= Price.MIN_PRICE && element.offer.price <= Price.MAX_PRICE;
    case 'high' : return element.offer.price > Price.MAX_PRICE;
    default : return true;
  }
};

const chooseFeatures = (element) => Array.from(filterFeatures).every((filterFeature) => {
  if (!filterFeature.checked) {
    return true;
  }
  if (!element.offer.features) {
    return false;
  }
  return element.offer.features.includes(filterFeature.value);
});

const onFilterCard = (element) =>
  chooseHouses(element) &&
  chooseRooms(element) &&
  chooseGuests(element) &&
  choosePrices(element) &&
  chooseFeatures(element);

export {filterHouse, filterPrice, filterRooms, filterGuests, filterFeatures, onFilterCard};
