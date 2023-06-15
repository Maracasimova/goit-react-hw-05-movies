import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getSearchMovies } from '../../API/get-search-movies';
import MoviesList from 'components/MoviesList/MoviesList.jsx';
import SearchForm from 'components/SearchForm/SearchForm.jsx';

export default function Movies() {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();
  const history = useNavigate();

  useEffect(() => {
    const searchString = searchParams.get('query');
    if (searchString) {
      const getMovies = async () => {
        const { results } = await getSearchMovies(searchString);

        setMovies(results);
        setSearchMovie(searchString);
      };

      getMovies();
    }
  }, [searchParams]);

  const handleSubmit = async () => {
    if (searchMovie.trim()) {
      const { results } = await getSearchMovies(searchMovie);

      setMovies(results);
      setSearchMovie('');

      if (results.length === 0) {
        window.alert('Sorry, we do not have such movie');
      }

      history({ search: `query=${searchMovie}` });
    }
  };

  return (
    <>
      <header>
        <SearchForm
          handleSubmit={handleSubmit}
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
        />
      </header>
      <MoviesList movies={movies} />
    </>
  );
}
