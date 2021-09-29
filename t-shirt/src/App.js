import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Items from "./components/Items";
import ItemDetails from "./components/ItemDetails";
import EditItemForm from "./components/EditItemForm";
import OrderList from "./components/OrderList";
import PostNewItem from "./components/PostNewItem";

function App() {
    return (
        <div className="App">
            <Link to="/"> Home </Link>
            <Link to="/items/new"> Add New Item </Link>
            <Link to="/order">Cart</Link>
            <h1> Welcome to T-Shirt</h1>

            <Switch>
                <Route path="/" exact component={Items} />
                <Route path="/items/new" component={PostNewItem} />
                <Route path="/items/:id" exact component={ItemDetails} />
                <Route path="/items/:id/edit" component={EditItemForm} />
                <Route path="/order" component={OrderList} />
            </Switch>
        </div>
    );
}

export default App;
