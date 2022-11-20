import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log('flatpickr', selectedDates[0]);
  },
};

const dateInputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
startBtnEl.disabled = true;
let ms = null;

flatpickr(dateInputEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const onDateChange = () => {
  if (new Date(dateInputEl.value) > new Date()) {
    console.log('ok');
    startBtnEl.disabled = false;
  } else {
    window.alert('Please choose a date in the future');
    startBtnEl.disabled = true;
  }
};

const timerRun = () => {
  ms = new Date(dateInputEl.value) - new Date();
  if (ms <= 0) {
    clearInterval(timerId);
    window.alert('Bip Bip');
    startBtnEl.disabled = true;
    return;
  }

  daysEl.textContent = addLeadingZero(convertMs(ms).days);
  hoursEl.textContent = addLeadingZero(convertMs(ms).hours);
  minutesEl.textContent = addLeadingZero(convertMs(ms).minutes);
  secondsEl.textContent = addLeadingZero(convertMs(ms).seconds);
};

const onStartBtnClick = () => {
  timerId = setInterval(timerRun, 1000);
};

startBtnEl.addEventListener('click', onStartBtnClick);
dateInputEl.addEventListener('change', onDateChange);
