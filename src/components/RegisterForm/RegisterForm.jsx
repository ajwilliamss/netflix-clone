import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../Header/HeaderNav/HeaderNav";
import "./RegisterForm.scss";

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [userIsFocused, setUserIsFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [pwdIsFocused, setPwdIsFocused] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);
  const [confirmIsFocused, setConfirmIsFocused] = useState(false);

  const [success, setSuccess] = useState(false);

  const usernameRef = useRef(null);

  useEffect(() => {
    // Focus username input on initial load
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    // Validate username
    const usernameTest = USERNAME_REGEX.test(username);
    // console.log(usernameTest);
    setValidUsername(usernameTest);
  }, [username]);

  useEffect(() => {
    // Validate & match password
    const passwordTest = PASSWORD_REGEX.test(password);
    // console.log(passwordTest);
    setValidPassword(passwordTest);
    if (password === confirmPassword) {
      const match = password;
      setValidConfirm(match);
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    setSuccess(true);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      {success ? (
        <header className="header">
          <div className="overlay">
            <HeaderNav />
            <div className="register-content">
              <p className="success-message">
                Successfully registered! <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </header>
      ) : (
        <header className="header">
          <div className="overlay">
            <HeaderNav />
            <div className="register-content">
              <form onSubmit={handleSubmit}>
                <h1>Register an account</h1>
                {/* Username */}
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  ref={usernameRef}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  onFocus={() => setUserIsFocused(true)}
                  onBlur={() => setUserIsFocused(false)}
                  required
                  autoComplete="off"
                />
                <p
                  className={
                    userIsFocused && username && !validUsername
                      ? "input-error"
                      : "hide"
                  }
                >
                  Username must be between 4 and 24 characters and start with a
                  letter. Letters, numbers, hyphens, and underscores are
                  permitted.
                </p>
                {/* Password */}
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPwdIsFocused(true)}
                  onBlur={() => setPwdIsFocused(false)}
                />
                <p
                  className={
                    pwdIsFocused && !validPassword ? "input-error" : "hide"
                  }
                >
                  Password must be between 8 and 24 characters, include
                  uppercase and lowercase letters, a number, and a special
                  character. Special characters that are permitted: ! @ # $ %
                </p>
                {/* Confirm Password */}
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm_password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => setConfirmIsFocused(true)}
                  onBlur={() => setConfirmIsFocused(false)}
                />
                <p
                  className={
                    confirmIsFocused && !validConfirm ? "input-error" : "hide"
                  }
                >
                  Confirm password must match the password.
                </p>
                <button
                  disabled={
                    !validUsername || !validPassword || !validConfirm
                      ? true
                      : false
                  }
                >
                  Submit
                </button>
                <span>
                  Already have an account? <Link to="/login">Sign In</Link>
                </span>
              </form>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default RegisterForm;
