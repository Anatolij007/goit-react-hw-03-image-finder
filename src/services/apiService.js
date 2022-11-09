import axios from 'axios';

export const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=29672911-5d08d722b508a19172ab6b083&image_type=photo&orientation=horizontal&per_page=12`
  );
  return { hits: data.hits, total: data.total };
};
