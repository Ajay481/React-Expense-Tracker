import { Route, Switch } from "react-router-dom";
import { Auth } from "./component/Auth/Auth";
import { Layout } from "./component/Layout/Layout";
import { ForgotPassword } from "./component/Pages/ForgotPassword";
import { Home } from "./component/Pages/Home";
import { Profile } from "./component/Pages/Profile";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Layout>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        {!auth && (
          <Route path="/forgotpassword" exact>
            <ForgotPassword />
          </Route>
        )}
        <Auth />
      </Switch>
    </Layout>
  );
}

export default App;
