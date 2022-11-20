const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

stopBtnEl.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorSwitch = () => (bodyEl.style.backgroundColor = getRandomHexColor());
const onStartBtnClick = () => {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  colorSwitch();
  timerId = setInterval(colorSwitch, 1000);
};

const onStopBtnClick = () => {
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
  clearInterval(timerId);
};

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);
