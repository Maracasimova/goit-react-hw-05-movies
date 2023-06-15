import { getMovieCast } from '../../API/get-movie-cast';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import noImg from '../../images/noPoster.png';
import styles from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div className={styles.container}>
      {loading && <Loader />}
      {error && <p>Something wrong</p>}
      <ul className={styles.list}>
        {cast &&
          cast.map(({ id, profile_path, name, character }) => (
            <li className={styles.item} key={id}>
              <div>
                <img
                  className={styles.image}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : noImg
                  }
                  alt={name}
                  width="100"
                  height=""
                />
              </div>
              <div>
                <p className={styles.actor}>{name}</p>
                <p className={styles.character}>{character}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
