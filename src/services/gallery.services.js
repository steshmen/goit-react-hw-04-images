import axios from 'axios';

const API_KEY = '33850777-d3532e1c860cfcd3ae11015e6';
const BASE_URL = 'https://pixabay.com/api';

export const getGallery = async (value, page) => {
  const response = await axios.get(
    `${BASE_URL}/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
