// const timeDate = _embedded.events[0].dates.start.localDate;
import SearchService from './api_service';
import eventsModalTpl from '../templates/events__modal.hbs';

const fetchService = new SearchService();

export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = '#timer-1';
    this.targetDate = targetDate;
    this.intervalId = null;
  }
  getRefs() {
    return {
      days: document.querySelector(`${this.selector} [data-value='days']`),
      hours: document.querySelector(`${this.selector} [data-value='hours']`),
      mins: document.querySelector(`${this.selector} [data-value='mins']`),
      secs: document.querySelector(`${this.selector} [data-value='secs']`),
    };
  }
  updateDate() {
    this.intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();
      if (time < 0) {
        clearInterval(this.intervalId);
        return;
      }
      this.getRefs().days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      this.getRefs().hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.getRefs().mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      this.getRefs().secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    }, 300);
  }
  pad(value) {
      return String(value).padStart(2, '0');
    }
  // stopTimer() { //Не знаю пока, как перезаписывать таймер
  //   clearInterval(this.intervalId);
  // }
}

// fetchService
//   .fetchApiEvent()
//   .then((data) => {
//     // console.log( data )
//     const cardsArr = data.map(
//       (element) => {
//         const { dates } = element;
//         const { start } = dates;
//         const { dateTime } = start;
//         console.log(({ dateTime }));
//         const timeDate = {
//           id: element.id,
//           event: element.name,
//           targetDate: dateTime,
//         };
//         console.log(timeDate);
//         return timeDate;
//       });
//     console.log(cardsArr);
//     return cardsArr;
//   })
