import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav";
import { BsChevronRight } from "react-icons/bs";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <HeaderNav />
        <div className="header-content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime</p>
          <Link to="/register">
            <button type="button">
              Watch free for 30 days <BsChevronRight size="1.5rem" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
