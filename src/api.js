import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID tTtvsTyAYQSHiuF1pJ2NyF38y2oIoHdWN9PA9lmq5L0',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
