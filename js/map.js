import {adForm, deactivateForm, activateForm, diactivateFilters} from './change-page-form.js';
import {filterCard} from './filters.js';
import {renderCard} from './card.js';

deactivateForm();
diactivateFilters();

// const SIMILAR_AD_COUNT = 10;

const COORDINATE_ROUNDING = 5;

const ZOOM_MAP = 12;

const CENTER_CITY_TOKYO = {
  lat: 35.69034,
  lng: 139.75175,
};

const addressForm = adForm.querySelector('[name = "address"]');

const getAddress = (location) => {
  const lat = location.lat.toFixed(COORDINATE_ROUNDING);
  const lng = location.lng.toFixed(COORDINATE_ROUNDING);
  addressForm.value = `${lat} ${lng}`;
};

const map = L.map('map-canvas')
  .on('load', () => {
    getAddress(CENTER_CITY_TOKYO);
    activateForm();
  })
  .setView(CENTER_CITY_TOKYO, ZOOM_MAP);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const cardPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  CENTER_CITY_TOKYO,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  getAddress(evt.target.getLatLng());
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (item) => {
  const {lat, lng} = item.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      cardPinIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(renderCard(item));
};

const createData = (element) => {
  markerGroup.clearLayers();
  element.slice().filter(filterCard)/*.slice(0, SIMILAR_AD_COUNT)*/.forEach((item) => {
    createMarker(item);
  });
};

export {map, mainPinMarker, CENTER_CITY_TOKYO, ZOOM_MAP, getAddress, createData};
