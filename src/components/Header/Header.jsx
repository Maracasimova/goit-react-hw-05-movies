import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.header}>
          <h1 className={styles.title}>Filmoteka</h1>
          <div className={styles.btnWrap}>
            <Link className={styles.btnNav} to="/">
              Home
            </Link>
            <Link className={styles.btnNav} to="/movies">
              Movies
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
