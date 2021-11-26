import $ from 'jquery'; // for spiner

// ---------Spiner
const loader = $('#loader');

let isLoading = false;

const showLoader = () => {
  loader.show();
  isLoading = true;
};

const hideLoader = () => {
  loader.hide();
  isLoading = false;
};

export { showLoader, hideLoader, isLoading };
