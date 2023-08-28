
import logo from '../../assets/logo.png';
import ColorToggle from '../ColorToggle/ColorToggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar_logo" src={logo} alt="logo" />
      <div className="navbar-links">
        <a href="/characters" className="navbar-link">
          Characters
        </a>
        <a href="/episodes" className="navbar-link">
          Episodes
        </a>
        <a href="/locations" className="navbar-link">
          Locations
        </a>
      </div>
      <ColorToggle />
    </div>
  );
};

export default Navbar;
