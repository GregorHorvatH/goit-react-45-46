import styles from './styles.module.css';

const Link = ({ to, children }) => {
  const { pathname } = window.location;

  return (
    <a href={to} className={pathname === to ? styles.active : ''}>
      {children}
    </a>
  );
};

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to='/'>Home</Link>
    <Link to='/cart'>Cart</Link>
    <Link to='/counter'>Counter</Link>
    <Link to='/about'>About</Link>
  </nav>
);

export default Navigation;
