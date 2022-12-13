import { Link } from 'react-router-dom';

export const Header = () => {
  const logout = () => {
    console.log(`user ${user} is logged out`);
  };

  return (
    <header>
      <Link to="/" className="header__link">
        Schach Verein "Der Turm"
      </Link>

      <div className="header__nav">
        <button onClick={logout} className="header__link">
          Logout
        </button>
        <Link to="/login" className="header__link">
          Login
        </Link>
      </div>
    </header>
  );
};
