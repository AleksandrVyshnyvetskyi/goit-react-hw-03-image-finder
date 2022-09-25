export function imageApi(searchName) {
  return fetch(
    `https://pixabay.com/api/?q=${searchName}&page=1&key=29359715-57cbbaa05904a72f5703b5006&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`We don't have ${searchName}...`));
  });
}
