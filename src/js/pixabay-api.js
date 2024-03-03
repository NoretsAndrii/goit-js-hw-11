import createContent from './render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function request(word, inputFormForSearch, gallary) {
  const searchParams = new URLSearchParams({
    key: '42677735-fe61580d2fc9bff74664cab68',
    q: word,
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
      if (resultOfSearch.hits.length === 0) {
        gallary.innerHTML = '';
        inputFormForSearch.value = '';

        iziToast.error({
          close: false,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          progressBar: false,
        });
        return;
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
