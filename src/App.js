import { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from "./component/Auth/Auth";
import { Layout } from "./component/Layout/Layout";
import { ForgotPassword } from "./component/Pages/ForgotPassword";
import { Home } from "./component/Pages/Home";
import { Profile } from "./component/Pages/Profile";
import { AuthContext } from "./component/store/AuthContext";
import { ExpenseContext } from "./component/store/ExpenseContext";

function App() {
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      <ExpenseContext.Provider value={{ expenses, setExpenses }}>
        <Layout>
          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            {!authCtx.isLoggedIn && (
              <Route path="/forgotpassword" exact>
                <ForgotPassword />
              </Route>
            )}
            <Auth />
          </Switch>
        </Layout>
      </ExpenseContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
