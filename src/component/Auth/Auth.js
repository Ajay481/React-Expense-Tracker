import React, { useEffect, useRef, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUsers } from "../ReduxStore/AuthSlice";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const history = useHistory();

  const auth = useSelector((state) => state.auth);


  useEffect(() => {
    if (auth.token) {
      history.replace("/home");
    }
  }, [auth.token]);

  const dispatch = useDispatch();

  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const confirmPasswordInputRef = useRef("");

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    let url;
    if (enteredEmail && enteredPassword === enteredConfirmPassword) {
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlvwm2UFysqlxp549MzHN_mTVXIn57d7s";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlvwm2UFysqlxp549MzHN_mTVXIn57d7s";
      }
      dispatch(loginUsers({ url, enteredEmail, enteredPassword }));
    } else if (
      enteredEmail.length === 0 ||
      enteredPassword.length === 0 ||
      enteredConfirmPassword.length === 0
    ) {
      alert("Enter All Required Details");
    } else if (enteredEmail && enteredPassword !== enteredConfirmPassword) {
      alert("Confirm Password Not Matched");
    }
  };
  return (
    <div className={classes.authtop}>
      <div className={classes.auth}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <div>
          <label>Email</label>
        </div>
        <input
          data-testid="email"
          type="email"
          id="email"
          placeholder="Enter Email"
          ref={emailInputRef}
          required
        />
        <div>
          <label>Password</label>
        </div>
        <input
          data-testid="password"
          type="password"
          id="password"
          placeholder="Enter Password"
          ref={passwordInputRef}
          required
        />
        <div>
          <label>Confirm Password</label>
        </div>
        <input
          data-testid="confirmPassword"
          type="password"
          id="confirmpassword"
          placeholder="Confirm Password"
          ref={confirmPasswordInputRef}
          required
        />
        <div>
          <button data-testid="submit" onClick={submitHandler}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
        <div>
          {isLogin ? (
            <NavLink to="/forgotpassword">Forgot Password</NavLink>
          ) : null}
        </div>
      </div>
      <div>
        <button className={classes.button} onClick={switchAuthHandler}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Have an account? Login"}
        </button>
      </div>
    </div>
  );
};
