const formEl = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');

function getUserData(event) {
  const userInfo = JSON.stringify({
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  });
  localStorage.setItem('feedback-form-state', userInfo);
  // console.log(localStorage);
}

formEl.addEventListener('input', throttle(getUserData, 500));

function addUserData() {
  if (localStorage.getItem('feedback-form-state')) {
    const userInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
    formEl.elements.email.value = userInfo.email;
    formEl.elements.message.value = userInfo.message;
  }
}
addUserData();

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  console.log({
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  });
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
}
