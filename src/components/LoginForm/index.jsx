import { useState } from 'react';

const LoginForm = () => {
  const [login, setLogin] = useState('werhwertyu');
  const [password, setPassword] = useState('sdfghj');

  const handleChangeLogin = (e) => setLogin(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('login:', login);
    console.log('password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>login</span>
        <input type='text' value={login} onChange={handleChangeLogin} />
      </label>

      <label>
        <span>password</span>
        <input
          type='password'
          value={password}
          onChange={handleChangePassword}
        />
      </label>

      <button type='submit'>login</button>
    </form>
  );
};

export default LoginForm;
