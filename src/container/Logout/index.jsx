import { useLogoutMutation } from '../../redux/userApi';
import styles from './styles.module.css';

const Logout = () => {
  const [logout] = useLogoutMutation();

  const handleLogoutClick = () => {
    // console.log('logout');
    logout();
  };

  return (
    <div className={styles.logout}>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default Logout;
