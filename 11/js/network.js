import { showAlert } from './util.js';

const DATA = 'https://25.javascript.pages.academy/keksobooking/data';
const SERVER = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(DATA,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((dataUsers) => onSuccess(dataUsers))
    .catch((err) => {
      showAlert(err);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};


export {getData, sendData};
