import React from 'react';
import styles from './SearchForm.module.css';

export default function SearchForm({
  handleSubmit,
  searchMovie,
  setSearchMovie,
}) {
  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        onChange={e => setSearchMovie(e.target.value)}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={searchMovie}
        className={styles.input}
      />
      <button className={styles.btn} type="submit">
        &#128269;
      </button>
    </form>
  );
}
