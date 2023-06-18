import React from 'react';
import { Link } from 'react-router-dom';
import noImg from '..//..//images/noPoster.png';
import styles from './MoviesList.module.css';

export default function MovieList({ movies, location }) {
  return (
    <ul className={styles.moviesList}>
      {movies.length > 0 &&
        movies.map(({ id, title, poster_path }) => (
          <li className={styles.list} key={id} id={id}>
            <Link className={styles.link} to={`/movies/${id}`}
              state={{ from: location }} >
              <img
                className={styles.img}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : noImg
                }
                alt="poster"
                width=""
                height=""
              />
              <p className={styles.movieName}>{title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}
