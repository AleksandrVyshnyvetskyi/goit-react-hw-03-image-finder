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

// import axios from 'axios';
// const BASE_URL = 'https://pixabay.com/api/';
// const myAPIkey = '29146874-e25e04f0bbd5e8c4fffc4a4f6';

// const fetchRequest = async (searchName, page) => {
//   const response = await axios.get(
//     `${BASE_URL}?q=${searchName}&page=${page}&key=${myAPIkey}&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response.data;
// };

// export default fetchRequest;
