import { useState, useEffect } from 'react';

  export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {}, [auth]);

  return (
    <>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={(e) => createUser(e, email, password)}>Sign In</button>
      </form>
    </>
  );
};
