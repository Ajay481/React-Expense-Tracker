import React, { useContext, useRef } from "react";
import { AuthContext } from "../store/AuthContext";
import classes from "./Profile.module.css";

export const Profile = () => {
  const authCtx = useContext(AuthContext);

  const nameInputRef = useRef("");
  const urlInputRef = useRef("");

  const updateHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    console.log(authCtx.token)

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBlvwm2UFysqlxp549MzHN_mTVXIn57d7s",
      {
        method: "POST",
        body: JSON.stringify({
          displayName: enteredName,
          photoUrl: enteredUrl,
          returnSecureToken: true,
          idToken: authCtx.token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
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
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className={classes.profile}>
      <div className={classes.contact}>
        <div>Contact Details</div>
        <button>Cancel</button>
      </div>
      <div className={classes.inner}>
        <label>Full Name:</label>
        <input type="text" id="name" required ref={nameInputRef} />
        <label>Profile Photo URL:</label>
        <input type="url" id="profile" required ref={urlInputRef} />
        <div>
          <button onClick={updateHandler}>Update</button>
        </div>
      </div>
    </div>
  );
};
