import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../API/get-trending';
import { useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import MovieList from 'components/MoviesList/MoviesList.jsx';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getTrendingMovies();

      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Trending today</h1>
      <MovieList movies={movies} location={location} />
    </div>
  );
}
