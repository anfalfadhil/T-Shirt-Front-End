import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { Items } from "./components/Items";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <div className="App">
      <h1> Welcome to T-Shirt</h1>
      <Route path="/" exact component={Items} />
      <Route path="/item/:itemid" exact>
        <ItemDetails />
      </Route>
      <Switch></Switch>
    </div>
  );
}

export default App;
