import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import { BsGoogle } from 'react-icons/bs';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setCurrentUser, currentUser, users, setUsers } =
    useContext(AuthContext);

  return (
    <div className="login-view">
      <h1>Login Page</h1>
      <div className="login-buttons__container">
        <h2>Log in with your socials</h2>
        <div>
          <button className="login-buttons__button">
            <BsGoogle className="login-button__icon" />
          </button>
        </div>
      </div>
      <form action="">
        <h2>Log in with your User Email</h2>
        <label htmlFor="email">
          Email
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={(e) => loginEmailPassword(e, email, password)}>
          Login
        </button>
      </form>
    </div>
  );
};
