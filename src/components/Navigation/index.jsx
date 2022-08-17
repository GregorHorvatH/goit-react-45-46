import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <div className={styles.links}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/cart'>Cart</NavLink>
      <NavLink to='/counter'>Counter</NavLink>
      <NavLink to='/about'>About</NavLink>
    </div>
  </nav>
);

export default Navigation;
