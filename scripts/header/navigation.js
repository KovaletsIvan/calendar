import { getItem, setItem } from "../common/storage.js";
import { renderWeek } from "../calendar/calendar.js";
import { renderHeader } from "../calendar/header.js";
import { getStartOfWeek, getDisplayedMonth } from "../common/time.utils.js";

const navElem = document.querySelector(".navigation");
const displayedMonthElem = document.querySelector(
  ".navigation__displayed-month"
);

function renderCurrentMonth() {
  displayedMonthElem.innerHTML = getDisplayedMonth(
    getItem("displayedWeekStart")
  );
  // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
  // вставить в .navigation__displayed-month
}

const onChangeWeek = (event) => {
  if (event.target.dataset.direction == "prev") {
    setItem(
      getItem("displayedWeekStart").setDate(
        getItem("displayedWeekStart").getDate() - 7
      )
    );
  }
  if (event.target.dataset.direction == "next") {
    setItem(
      getItem("displayedWeekStart").setDate(
        getItem("displayedWeekStart").getDate() + 7
      )
    );
  }
  renderCurrentMonth();
  renderHeader();
  renderWeek();
  // при переключении недели обновите displayedWeekStart в storage
  // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)
};

export const initNavigation = () => {
  renderCurrentMonth();
  navElem.addEventListener("click", onChangeWeek);
};
