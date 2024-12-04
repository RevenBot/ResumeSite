import { Route, Switch } from "wouter";
import Overlay from "./components/Overlay/Overlay";
import Background from "./components/background/Background";
import Test from "./components/Test/Test";
import HomePage from "./components/HomePage";

export const App = () => (
  <>
    <Overlay />
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/frame/:id" component={Background} />

      <Route path="/test/">
        <Test />
      </Route>
      <Route path="/test/:id">
        <Test />
      </Route>

      <Route>404: No such page!</Route>
    </Switch>
  </>
);

export default App;
