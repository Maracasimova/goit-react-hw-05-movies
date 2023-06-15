import { getMovieReviews } from '../../API/get-movie-reviews';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styles from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <div className={styles.container}>
      {loading && <Loader />}
      {error && <p>Something wrong</p>}
      {reviews.length > 0 ? (
        <>
          <ul className={styles.list}>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className={styles.author}>{author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}
