import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'c850ec5ba16f4b711da56dfde72a63cf';

export const getSearchMovies = async searchParam => {
  const query = `search/movie?api_key=${KEY}&page=1&query=${searchParam}`;
  const { data: movies } = await axios.get(query);
  return movies;
};
