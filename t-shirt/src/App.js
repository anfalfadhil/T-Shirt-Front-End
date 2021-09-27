import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Items from "./components/Items";
import ItemDetails from "./components/ItemDetails";
import EditItemForm from "./components/EditItemForm";

function App() {
    return (
        <div className="App">
            <h1> Welcome to T-Shirt</h1>
            <Route path="/" exact component={Items} />
            <Route path="/item/:itemid" exact>
                <ItemDetails />
            </Route>
            <Switch>
                <Route path="/item/:itemId/edit" component={EditItemForm} />
            </Switch>
        </div>
    );
}

export default App;
