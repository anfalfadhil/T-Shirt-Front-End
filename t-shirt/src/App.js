import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Items from "./components/Items";
import ItemDetails from "./components/ItemDetails";
import OrderList from "./components/OrderList";

const dummyOrderData = [
    {
        name: "Sofa",
        description:
            "Scandinavian Helsinki irure, airport Melbourne cillum dolore duis. Elegant elit smart, Asia-Pacific airport Nordic aute exclusive velit Beams uniforms ex Shinkansen. Ut wardrobe id, anim Winkreative non uniforms occaecat bespoke Helsinki.",
        price: 100,
        _id: 1,
    },
    {
        name: "Bicycle",
        description:
            "Intricate tempor laboris essential Fast Lane sint sophisticated Swiss bulletin eiusmod anim in. Airport soft power Comme des Garçons signature Winkreative nisi labore wardrobe, velit Marylebone proident dolore.",
        price: 80,
        _id: 2,
    },
    {
        name: "Office Chair",
        description:
            "Scandinavian Helsinki irure, airport Melbourne cillum dolore duis. Elegant elit smart, Asia-Pacific airport Nordic aute exclusive velit Beams uniforms ex Shinkansen. Ut wardrobe id, anim Winkreative non uniforms occaecat bespoke Helsinki.",
        price: 35,
        _id: 3,
    },
    {
        name: "6 Sets of Dishes and Cutlery",
        description:
            "K-pop ad handsome sleepy pintxos nulla Porter voluptate delightful consequat quality of life. Elegant tote bag ut exclusive finest Ginza dolor et Scandinavian. Boulevard in excepteur, exquisite Muji dolor boutique laborum Winkreative dolore laboris Fast Lane.",
        price: 20,
        _id: 4,
    },
];

function App() {
    return (
        <div className="App">
            <Link to="/"> Home </Link>
            <h1> Welcome to T-Shirt</h1>

            <Switch>
                <Route path="/" exact component={Items} />
                <Route path="/items/:id" exact component={ItemDetails} />
                <Route path="/order">
                    <OrderList items={dummyOrderData} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
