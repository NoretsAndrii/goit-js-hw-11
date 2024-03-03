import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formForSearch = document.querySelector('.form');
const inputFormForSearch = document.querySelector('.form-input');
const btnForSearch = document.querySelector('.form-btn');
const gallary = document.querySelector('.gallary');

formForSearch.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const wordForSearch = inputFormForSearch.value.trim();
  if (!wordForSearch) return;
  gallary.innerHTML = '<span class="loader"></span>';

  console.log('good');

  const searchParams = new URLSearchParams({
    key: '42677735-fe61580d2fc9bff74664cab68',
    q: wordForSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(resultOfSearch => {
      console.log('very good');
      console.log(resultOfSearch);
      if (resultOfSearch.hits.length === 0) {
        gallary.innerHTML = '';
        inputFormForSearch.value = '';

        return iziToast.error({
          close: false,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          progressBar: false,
        });
      }
      gallary.innerHTML = createContent(resultOfSearch);
      inputFormForSearch.value = '';
      const lightbox = new SimpleLightbox('.gallary-item-link', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => console.log(error));
}

function createContent({ hits: arrImages }) {
  return arrImages
    .map(
      image =>
        `<li class="gallary-item">
      <a class="gallary-item-link" href="${image.largeImageURL}"><img
        class="gallary-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
      /></a>
         <ul class="info-list">
          <li class="info-list-item">
            <h2 class="list-item-title">Likes</h2>
            <p class="list-item-info">${image.likes}</p>
          </li>
          <li class="info-box-list-item">
            <h2 class="list-item-title">Views</h2>
            <p class="list-item-info">${image.views}</p>
          </li>
          <li class="info-box-list-item">
            <h2 class="list-item-title">Comments</h2>
            <p class="list-item-info">${image.comments}</p>
          </li>
          <li class="info-box-list-item">
            <h2 class="list-item-title">Downloads</h2>
            <p class="list-item-info">${image.downloads}</p>
          </li>
        </ul>
       </li>`
    )
    .join('');
}
