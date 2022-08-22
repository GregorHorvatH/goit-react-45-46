import { useState } from 'react';
import styles from './styles.module.css';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = (e) => setLogin(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    const credentials = { login, password };

    e.preventDefault();

    // TODO: fetch https://goit-phonebook-api.herokuapp.com/users/login
    console.log(credentials);
  };

  return (
    <div className={styles.login}>
      <fieldset>
        <legend>Login</legend>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>login</span>
            <input type='text' value={login} onChange={handleChangeLogin} />
          </label>

          <label className={styles.field}>
            <span>password</span>
            <input
              type='text'
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          <button type='submit'>Login</button>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
