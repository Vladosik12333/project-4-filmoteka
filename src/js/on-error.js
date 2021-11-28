const refs = {
  errorContainer: document.querySelector('.input__error-messege'),
};

function showErrorMessege(message) {
  if (!message) {
    message = 'Фильм не найден. Пожалуйста, повторите запрос.';
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
