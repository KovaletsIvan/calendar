import { getItem } from "../common/storage.js";
import { generateWeekRange } from "../common/time.utils.js";
import { openModal } from "../common/modal.js";

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const renderHeader = () => {
  const calendarElem = document.querySelector(".calendar__header");
  const dayElem = daysOfWeek
    .map(
      (setDay,i) => `<div class = 'day-label'>
  <span class = 'day-label__day-name'>${setDay}</span>
  <span class = 'day-label__day-number'>${generateWeekRange(
    getItem("displayedWeekStart")
  )[i].getDate()}</span>
  </div>`
    )
    .join("");
  calendarElem.innerHTML = dayElem;
  // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
  // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
  // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик

const btnElem = document.querySelector(".create-event-btn");
btnElem.addEventListener("click", openModal);
