'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const timersNodes = document.querySelectorAll('#new-year-timer');

  function getRemainingTimeForNewYear() {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDate = now.getDate();

    const toTomorrowSeconds = Math.round(
      (new Date(nowYear, nowMonth, nowDate + 1).getTime() - now.getTime()) /
        1000,
    );
    const hoursRest = toTomorrowSeconds % 3600;

    const months = 11 - nowMonth;
    const days = new Date(nowYear, nowMonth + 1, 0).getDate() - nowDate;
    const hours = Math.floor(toTomorrowSeconds / 3600);
    const minutes = Math.floor(hoursRest / 60);
    const seconds = hoursRest % 60;

    return { months, days, hours, minutes, seconds };
  }

  function setNewYearTimersHtml() {
    const { months, days, hours, minutes, seconds } =
      getRemainingTimeForNewYear();

    timersNodes.forEach((node) => {
      node.innerHTML = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
    });
  }

  if (timersNodes.length) {
    setNewYearTimersHtml();
    setInterval(setNewYearTimersHtml, 1000);
  }
});
