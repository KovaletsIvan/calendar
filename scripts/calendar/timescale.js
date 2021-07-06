import { createNumbersArray } from "../common/createNumbersArray.js";

export const renderTimescale = () => {
  const timeScaleElem = document.querySelector(".calendar__time-scale");

  const timeDays = createNumbersArray(9, 25)
    .map(
      (elem) =>
        `<div class = 'time-slot'>
    <span class = 'time-slot__time'>${elem}:00</span>
    </div>`
    )
    .join("");

  return (timeScaleElem.innerHTML = timeDays);
  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
};
