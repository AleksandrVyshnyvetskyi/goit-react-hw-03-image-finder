import axios from 'axios';

const imageApi = async (searchName, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchName}&page=${page}&key=29359715-57cbbaa05904a72f5703b5006&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
  // ).then(response => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   return Promise.reject(new Error(`We don't have ${searchName}...`));
  // });
};

export { imageApi };
