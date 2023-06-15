import {
  Outlet,
  useParams,
  useNavigate,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../API/get-movie-details';
import Loader from 'components/Loader/Loader';
import noImg from '..//..//images/noPoster.png';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const movieDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieDetails(movieId);
        setMovie(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    movieDetails();
  }, [movieId]);

  const goBack = () => navigate(from || '/');

  return (
    <div className={styles.container}>
      <button className={styles.returnBtn} onClick={goBack}>
        Go back
      </button>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movie && (
        <div className={styles.movieDetails}>
          <div>
            <img
              className={styles.img}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : noImg
              }
              alt="poster"
              width=""
              height=""
            />
          </div>
          <div className={styles.infoBox}>
            <h2 className={styles.movieTitle}>{movie.title}</h2>
            <p className={styles.rating}>
              Rating:{' '}
              <span className={styles.voteRating}>
                {`${(movie.vote_average * 10).toFixed(1)}`}%
              </span>
            </p>
            <div className={styles.genreContainer}>
              <h3 className={styles.genreTag}>Genres:</h3>
              <p className={styles.genreName}>{`${movie.genres
                .map(genre => genre.name)
                .join(' / ')}`}</p>
            </div>

            <h3 className={styles.overviewTag}>Overview</h3>
            <p className={styles.movieOverview}>{`${movie.overview}`}</p>

            <div className={styles.additionalInfoBox}>
              <Link
                className={styles.castLink}
                state={{ from }}
                to="cast"
                replace
              >
                Cast
              </Link>
              <Link
                className={styles.reviewLink}
                state={{ from }}
                to="reviews"
                replace
              >
                Reviews
              </Link>
            </div>
          </div>
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
