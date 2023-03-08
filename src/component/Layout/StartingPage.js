import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../store/AuthContext";
import { Screen } from "../features/Screen";

import classes from "./StartingPage.module.css";

export const StartingPage = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const verifyHandler = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBlvwm2UFysqlxp549MzHN_mTVXIn57d7s",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
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
            let errMessage = "Authentication Failed";
            throw new Error(errMessage);
          });
        }
      })
      .then((data) => console.log(data))
      .catch((err) => alert(err.message));
  };

  const profileHandler = () => {
    history.replace("/profile");
  };
  return (
    <div>
      <div className={classes.welcome}>
        <div>Welcome to Expense Tracker!!!</div>
        <div>
          <span>Your Profile is Incomplete.</span>
          <button onClick={profileHandler}>Complete Now.</button>
        </div>
      </div>
      <div className={classes.btn}>
        <button onClick={verifyHandler}>VERIFY EMAIL ID</button>
      </div>
      <Screen />
    </div>
  );
};
