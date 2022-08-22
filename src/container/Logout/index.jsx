import styles from './styles.module.css';

const Logout = () => {
  const handleLogoutClick = () => {
    console.log('logout');
  };

  return (
    <div className={styles.logout}>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default Logout;
