import { Route, Switch } from "react-router-dom";
import { Auth } from "./component/Auth/Auth";
import { Layout } from "./component/Layout/Layout";
import { Home } from "./component/Pages/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Auth />
      </Switch>
    </Layout>
  );
}

export default App;
