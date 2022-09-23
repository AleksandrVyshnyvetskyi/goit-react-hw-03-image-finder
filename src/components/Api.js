function FetchRequest(searchName) {
  return fetch(
    `https://pixabay.com/api/?q=${searchName}&page=1&key=29146874-e25e04f0bbd5e8c4fffc4a4f6&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`We don't have that...`));
  });
}
const api = {
  FetchRequest,
};
export { api };
