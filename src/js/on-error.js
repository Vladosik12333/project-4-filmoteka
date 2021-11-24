const refs = {
  errorContainer: document.querySelector('.input__error-messege'),
};

function showErrorMessege(message) {
  if (!message) {
    message = 'Search result not successful. Please enter the correct movie name.';
  }

  refs.errorContainer.textContent = message;

  runErrorMessage();
  setTimeout(stopErrorMessage, 4000);
}

function runErrorMessage() {
  refs.errorContainer.classList.remove('is-hidden');
}

function stopErrorMessage() {
  refs.errorContainer.classList.add('is-hidden');
}

export { showErrorMessege };

// ІМПОРТ:
// import { showErrorMessege } from './js/on-error';

// ПРИЙМАЄ:
// стрінгу, текст якої відобразиться в повідомленні про помилку.
// Цей параметр (message) необов'язковий.
// За замовчуванням текст повідомлення про помилку - з макету.
