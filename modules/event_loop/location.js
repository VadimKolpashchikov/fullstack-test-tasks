'use strict';

function getUserGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function displayUserCoords(node, position) {
  node.innerHTML = `
    <p>Широта: ${position.coords.latitude}</p>
    <p>Долгота: ${position.coords.longitude}</p>
  `;
}

function displayError(node, error) {
  node.innerHTML = `
    <p style="color: red;">Ошибка: ${error.message}</p>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#location-btn');
  const resultWrapper = document.querySelector('#location');

  btn.addEventListener('click', () => {
    getUserGeolocation()
      .then((position) => displayUserCoords(resultWrapper, position))
      .catch((error) => displayError(resultWrapper, error));
  });
});
