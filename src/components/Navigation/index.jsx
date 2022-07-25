import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import './linkstyles.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/cart'>Cart</NavLink>
    <NavLink to='/counter'>Counter</NavLink>
    <NavLink to='/about'>About</NavLink>
  </nav>
);

export default Navigation;
