import { Link } from "react-router-dom";
import "./MobileNav.scss";

const MobileNav = ({ changeNav }) => {
  return (
    <>
      <ul className={`mobile-nav ${changeNav && "mobile-nav-fill"}`}>
        <li className="mobile-nav-link">
          <Link to="/netflix">Home</Link>
        </li>
        <li className="mobile-nav-link">
          <Link to="/netflix">TV Shows</Link>
        </li>
        <li className="mobile-nav-link">
          <Link to="/netflix">Movies</Link>
        </li>
        <li className="mobile-nav-link">
          <Link to="/netflix">New & Popular</Link>
        </li>
        <li className="mobile-nav-link">
          <Link to="/netflix">My List</Link>
        </li>
      </ul>
    </>
  );
};

export default MobileNav;
