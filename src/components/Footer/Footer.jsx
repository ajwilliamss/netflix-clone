import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Questions? Call 1-801-000-723</p>
      <div className="footer-column">
        <ul>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Investor Relations</Link>
          </li>
          <li>
            <Link to="/">Terms of Use</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Help Center</Link>
          </li>
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/">Privacy</Link>
          </li>
          <li>
            <Link to="/">Speed Test</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <Link to="/">Redeem Gift Cards</Link>
          </li>
          <li>
            <Link to="/">Cookie Preferences</Link>
          </li>
          <li>
            <Link to="/">Legal Notices</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Media Center</Link>
          </li>
          <li>
            <Link to="/">Ways to Watch</Link>
          </li>
          <li>
            <Link to="/">Corporate Information</Link>
          </li>
          <li>
            <Link to="/">Only on Netflix</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
