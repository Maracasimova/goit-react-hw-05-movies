import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovies } from '../../API/search-movies';
import MoviesList from 'components/MoviesList/MoviesList.jsx';
import SearchForm from 'components/SearchForm/SearchForm.jsx';

export default function Movies() {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

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

  const handleSubmit = () => {
    if (!searchMovie.trim()) return;

    setSearchParams({ query: searchMovie });
    setSearchMovie('');
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
      <MoviesList movies={movies} location={location} />
    </>
  );
}
