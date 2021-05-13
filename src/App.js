import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Store from "./components/Store";
import Team from "./components/Team";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/store'>
          <Store />
        </Route>
        <Route path='/team'>
          <Team />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
