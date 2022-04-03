import {filterHouse, filterPrice, filterRooms, filterGuests, filterFeatures, Default} from './reset-form.js';

const Price = {
  MIN_PRICE: 10000,
  MAX_PRICE: 50000,
};

const chooseHouses = (element) => filterHouse.value === Default.TIPES[0] ? true: element.offer.type === filterHouse.value;
const chooseRooms = (element) => filterRooms.value === Default.TIPES[0] ? true: element.offer.rooms === filterRooms.value;
const chooseGuests = (element) => filterGuests.value === Default.TIPES[0] ? true: element.offer.guests === filterGuests.value;

const choosePrices = (element) => {
  switch (filterPrice.value) {
    case 'low' : return element.offer.price < Price.MIN_PRICE;
    case 'middle': return element.offer.price >= Price.MIN_PRICE && element.offer.price <= Price.MAX_PRICE;
    case 'high' : return element.offer.price > Price.MAX_PRICE;
    default : return true;
  }
};

const chooseFeatures = (element) => {
  const checkedFeatures = Array.from(filterFeatures.querySelectorAll('input[type="checkbox"]:checked')).map((item) => item.value);
  return (element.offer.features) ? checkedFeatures.every((checkedFeatures) => element.offer.features.includes(checkedFeatures)) : checkedFeatures.length === 0;
};

const filterCard = (element) => {
  chooseHouses(element);
  chooseRooms(element);
  chooseGuests(element);
  choosePrices(element);
  chooseFeatures();
};

export {filterCard};