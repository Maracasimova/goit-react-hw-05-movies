import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'c850ec5ba16f4b711da56dfde72a63cf';

export const getTrendingMovies = async () => {
  const query = `trending/movie/day?api_key=${KEY}`;
  const { data: movies } = await axios.get(query);
  return movies;
};
