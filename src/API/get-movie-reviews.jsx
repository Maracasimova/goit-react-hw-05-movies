import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'c850ec5ba16f4b711da56dfde72a63cf';

export const getMovieReviews = async movieId => {
  const query = `movie/${movieId}/reviews?api_key=${KEY}`;
  const { data } = await axios.get(query);
  return data;
};
