import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../Header/HeaderNav/HeaderNav";
import "./LoginForm.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef(null);

  useEffect(() => {
    // Focus username input on initial load
    usernameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <header className="header">
      <div className="overlay">
        <HeaderNav />
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            {/* Username */}
            <input
              type="text"
              value={username}
              ref={usernameRef}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <Link to="/netflix">
              <button>Sign In</button>
            </Link>
            <span>
              New to Netflix? <Link to="/register">Sign up now.</Link>
            </span>
            <small style={{ color: "lightgrey" }}>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </small>
          </form>
        </div>
      </div>
    </header>
  );
};

export default LoginForm;
