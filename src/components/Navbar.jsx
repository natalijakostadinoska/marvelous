import './Navbar.scss';
import profile from '../assets/profile.png';
import logo from '../assets/logo.png';
import { FaSearch, FaBell } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li className={location.pathname === "/home" ? "active" : ""}>
            <Link to="/home">Home</Link>
          </li>
          <li className={location.pathname === "/movies" ? "active" : ""}>
            <Link to="/movies">Movies</Link>
          </li>
          <li className={location.pathname === "/tv" ? "active" : ""}>
            <Link to="/tv">TV Shows</Link>
          </li>
          <li className={location.pathname === "/news" ? "active" : ""}>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <FaSearch className="icon" />
        <FaBell className="icon" />
        <img className="profile" src={profile} alt="profile" />
      </div>
    </nav>
  );
}
