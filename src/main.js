const formForSearch = document.querySelector('.form');
const inputFormForSearch = document.querySelector('.form-input');
const btnForSearch = document.querySelector('.form-btn');
const gallary = document.querySelector('.gallary');

formForSearch.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  gallary.innerHTML = '';
  const wordForSearch = inputFormForSearch.value.trim();
  if (!wordForSearch) return;
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
      if (resultOfSearch.hits.length === 0)
        return console.log(
          '"Sorry, there are no images matching your search query. Please try again!"'
        );
      createContent(resultOfSearch);
      //   const markup = users
      //     .map(user => {
      //       return `<li>
      //           <p><b>Name</b>: ${user.name}</p>
      //           <p><b>Email</b>: ${user.email}</p>
      //           <p><b>Company</b>: ${user.company.name}</p>
      //         </li>`;
      //     })
      //     .join('');

      //   userList.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}

function createContent({ hits: arrImages }) {
  console.log(arrImages);
  const content = arrImages
    .map(
      image =>
        `<li class="gallary-item"><img class="gallary-image" src="${image.webformatURL}" alt="${image.tags}"></li>`
    )
    .join('');
  console.log(content);
  gallary.insertAdjacentHTML('beforeend', content);
}
