import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../redux/userApi';
import { loginSuccess } from '../../redux/user';

import styles from './styles.module.css';

const Login = () => {
  const dipatch = useDispatch();
  const [email, setEmail] = useState('test.user.1@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [login, status] = useLoginMutation();
  const { isLoading } = status;

  const handleChangeLogin = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  // console.log(status);

  const handleSubmit = (e) => {
    const credentials = { email, password };

    e.preventDefault();

    // TODO: fetch https://goit-phonebook-api.herokuapp.com/users/login
    // console.log(credentials);
    login(credentials).then(({ data }) => {
      dipatch(loginSuccess(data));
      console.log(data);
    });
  };

  return (
    <div className={styles.login}>
      <fieldset>
        <legend>Login</legend>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>email</span>
            <input type='text' value={email} onChange={handleChangeLogin} />
          </label>

          <label className={styles.field}>
            <span>password</span>
            <input
              type='text'
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          <button type='submit' disabled={isLoading}>
            Login
          </button>
        </form>
        {/* <span>or create new user...</span> */}
      </fieldset>
    </div>
  );
};

export default Login;
