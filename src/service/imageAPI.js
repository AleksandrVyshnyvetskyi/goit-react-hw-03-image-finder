import axios from 'axios';

const imageApi = async (searchName, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '29359715-57cbbaa05904a72f5703b5006';
  const PARAMS = 'photo&orientation=horizontal';
  const URL = `${BASE_URL}?q=${searchName}&page=${page}&key=${KEY}&image_type=${PARAMS}&per_page=12`;
  const response = await axios.get(URL);
  return response.data;
};

export { imageApi };
