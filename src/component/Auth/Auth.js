import React, { useContext, useRef, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import classes from "./Auth.module.css";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  const history = useHistory();

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

    if (enteredEmail && enteredPassword === enteredConfirmPassword) {
      let url;
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlvwm2UFysqlxp549MzHN_mTVXIn57d7s";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlvwm2UFysqlxp549MzHN_mTVXIn57d7s";
      }
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          confirmPassword: enteredConfirmPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication Failed";
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
          authCtx.login(data.idToken);
          history.replace("/home");
        })
        .catch((err) => alert(err.message));
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
          type="password"
          id="confirmpassword"
          placeholder="Confirm Password"
          ref={confirmPasswordInputRef}
          required
        />
        <div>
          <button onClick={submitHandler}>
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
