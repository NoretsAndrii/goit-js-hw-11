export default function request(word) {
  const searchParams = new URLSearchParams({
    key: '42677735-fe61580d2fc9bff74664cab68',
    q: word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
