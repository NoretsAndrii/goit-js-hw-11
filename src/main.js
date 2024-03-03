import request from './js/pixabay-api';

const formForSearch = document.querySelector('.form');
const inputFormForSearch = document.querySelector('.form-input');
const gallary = document.querySelector('.gallary');

formForSearch.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const wordForSearch = inputFormForSearch.value.trim();
  if (!wordForSearch) return;
  gallary.innerHTML = '<span class="loader"></span>';
  request(wordForSearch, inputFormForSearch, gallary);
}
