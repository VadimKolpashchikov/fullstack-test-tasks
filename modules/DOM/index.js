'use strict';

function createButton() {
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.classList.add('btn');
  btn.textContent = 'Нажми меня';
  return btn;
}

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.flex-wrap');
  const counter = document.querySelector('.counter');

  Array.from({ length: 5 }).forEach(() => wrapper.appendChild(createButton()));

  wrapper.addEventListener('click', function (event) {
    if (event.target.nodeName !== 'BUTTON') return;

    const buttons = event.currentTarget.querySelectorAll('button');

    for (const btn of buttons) {
      if (event.target === btn) {
        btn.innerText = 'Нажата!';
      } else {
        btn.innerText = 'Нажми меня';
      }
    }

    counter.innerText = Number(counter.innerText) + 1;
  });
});
