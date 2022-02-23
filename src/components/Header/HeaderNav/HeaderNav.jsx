import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import logo from "../../../assets/logo.png";
import "./HeaderNav.scss";

const HeaderNav = () => {
  const [click, setClick] = useState(false);

  const hamburgerIcon = (
    <CgMenu
      size="3rem"
      color="white"
      className="hamburger"
      onClick={() => setClick(!click)}
    />
  );

  const closeIcon = (
    <CgClose
      size="3rem"
      color="white"
      className="hamburger"
      onClick={() => setClick(!click)}
    />
  );
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/login">
          <button type="button">Sign In</button>
        </Link>
        <div className="mobile-menu">
          {click ? closeIcon : hamburgerIcon}
          {click && (
            <ul>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
