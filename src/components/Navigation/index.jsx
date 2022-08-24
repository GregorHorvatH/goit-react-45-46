import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const Navigation = () => {
  const { token } = useSelector((state) => state.user);

  return (
    <nav className={styles.navigation}>
      <div className={styles.links}>
        <NavLink to='/'>Home</NavLink>

        {token ? (
          <>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <NavLink to='/counter'>Counter</NavLink>
          </>
        ) : null}

        <NavLink to='/about'>About</NavLink>

        {token ? (
          <NavLink to='/logout'>Logout</NavLink>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
