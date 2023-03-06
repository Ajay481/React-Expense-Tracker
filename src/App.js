import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from "./component/Auth/Auth";
import { Layout } from "./component/Layout/Layout";
import { Home } from "./component/Pages/Home";
import { Profile } from "./component/Pages/Profile";
import { AuthContext } from "./component/store/AuthContext";

function App() {
  const [token, setToken] = useState(false);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      <Layout>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Auth />
        </Switch>
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
