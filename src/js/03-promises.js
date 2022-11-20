import Notiflix from 'notiflix';

const createPromiseFormEl = document.querySelector('.form');
const delayEl = createPromiseFormEl.elements.delay;
const stepEl = createPromiseFormEl.elements.step;
const amountEl = createPromiseFormEl.elements.amount;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const onCreatePromiseFormSubmit = event => {
  event.preventDefault();

  for (let i = 0; i < Number(amountEl.value); i += 1) {
    createPromise(i + 1, Number(delayEl.value) + i * Number(stepEl.value))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
};

createPromiseFormEl.addEventListener('submit', onCreatePromiseFormSubmit);
