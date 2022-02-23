import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import MobileNav from "./MobileNav/MobileNav";
import "./Nav.scss";

const Nav = () => {
  const [changeNav, setChangeNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNav = () => {
    if (window.pageYOffset > 0) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNav);
    // Cleanup function to avoid memory leak
    return () => {
      window.removeEventListener("scroll", toggleNav);
    };
  }, []);

  return (
    <nav className={`netflix-nav ${changeNav && "netflix-nav-fill"}`}>
      <div className="nav-container">
        <div className="nav-wrapper">
          <Link to="/">
            <img src={logo} alt="logo" className="netflix-nav-logo" />
          </Link>
          <ul className="netflix-nav-list">
            <li className="netflix-nav-link">
              <Link to="/netflix">Home</Link>
            </li>
            <li className="netflix-nav-link">
              <Link to="/netflix">TV Shows</Link>
            </li>
            <li className="netflix-nav-link">
              <Link to="/netflix">Movies</Link>
            </li>
            <li className="netflix-nav-link">
              <Link to="/netflix">New & Popular</Link>
            </li>
            <li className="netflix-nav-link">
              <Link to="/netflix">My List</Link>
            </li>
          </ul>
          <span className="mobile-nav-title">Browse</span>
          <BsFillArrowDownCircleFill
            size="1.25rem"
            color="white"
            className="mobile-icon"
            onClick={() => setMobileNav(!mobileNav)}
          />
          {mobileNav && <MobileNav changeNav={changeNav} />}
        </div>
        <img src={avatar} alt="avatar" className="netflix-nav-avatar" />
      </div>
    </nav>
  );
};

export default Nav;
