import { getItem, setItem } from "../common/storage.js";
import { renderEvents } from "./events.js";
import { getDateTime } from "../common/time.utils.js";
import { closeModal } from "../common/modal.js";

const eventFormElem = document.querySelector(".event-form");
const closeEventFormBtn = document.querySelector(".create-event__close-btn");

function clearEventForm() {
  [...eventFormElem].map((elem) => (elem.value = ""));
  // ф-ция должна очистить поля формы от значений
}

function onCloseEventForm() {
  // здесь нужно закрыть модальное окно и очистить форму

  closeEventFormBtn.addEventListener("click", clearEventForm);
  closeEventFormBtn.addEventListener("click", closeModal);
}

function onCreateEvent(event) {
  event.preventDefault();
  const formData = [...new FormData(eventFormElem)].reduce(
    (obj, [key, value]) => {
      return { ...obj, [key]: value };
    },
    {}
  );
  formData.id = Math.random();
  formData.startTime = getDateTime(
    JSON.stringify(formData.date),
    formData.startTime
  );
  formData.endTime = getDateTime(
    JSON.stringify(formData.date),
    formData.endTime
  );
  setItem("events", formData);
  console.log(getItem("events"));

  // задача этой ф-ции только добавить новое событие в массив событий, что хранится в storage
  // создавать или менять DOM элементы здесь не нужно. Этим займутся другие ф-ции
  // при подтверждении формы нужно считать данные с формы
  // с формы вы получите поля date, startTime, endTime, title, description
  // на основе полей date, startTime, endTime нужно посчитать дату начала и окончания события
  // date, startTime, endTime - строки. Вам нужно с помощью getDateTime из утилит посчитать start и end объекта события
  // полученное событие добавляем в массив событий, что хранится в storage
  // закрываем форму
  // и запускаем перерисовку событий с помощью renderEvents
}

export function initEventForm() {
  onCloseEventForm();
  onCreateEvent();
  // подпишитесь на сабмит формы и на закрытие формы
}

const submitBtn = document.querySelector(".event-form__submit-btn");

submitBtn.addEventListener("click", onCreateEvent);
submitBtn.addEventListener("click", clearEventForm);
closeEventFormBtn.addEventListener("click", onCloseEventForm);


