function smallSpinnerOn() {
  const refs = {
    smallSpinners: document.querySelectorAll('.spinner--small'),
  };

  refs.smallSpinners.forEach(smallSpinner => {
    const stoppingElement = smallSpinner.nextElementSibling.firstElementChild;
    stoppingElement.addEventListener('load', stopSmallSpinner);

    function stopSmallSpinner() {
      smallSpinner.classList.add('is-hidden');
    }
  });
}

function largeSpinnerOff() {
  document.querySelector('.spinner--large').classList.add('is-hidden');
}

export { smallSpinnerOn, largeSpinnerOff };
