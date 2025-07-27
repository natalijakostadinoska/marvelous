import './Navbar.scss';
import profile from '../assets/profile.png';
import logo from '../assets/logo.png';
import { FaSearch, FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>News</li>
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
