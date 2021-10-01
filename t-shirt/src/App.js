import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Items from "./components/Items";
import ItemDetails from "./components/ItemDetails";
import NewItem from "./components/NewItem";
import EditItem from "./components/EditItem";
import OrderList from "./components/OrderList";
import Bitcoin from "./components/Bitcoin";
import ContactUs from "./components/ContactForm";
import ContactMe from "./components/EmailUs";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <div className="main-header">
        <Navbar className="nav-bar">
          <Container>
            <Link to="/"> Home </Link>
            <Link to="/items/new"> Add New Item </Link>
            <Link to="/order"> Cart </Link>
            <Link to="/email">Email</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/bitcoin">Pay in Bitcoin</Link>
          </Container>
        </Navbar>

        <h1> Welcome to T-Shirt</h1>
      </div>

      <Switch>
        <Route path="/" exact component={Items} />
        <Route path="/items/new" component={NewItem} />
        <Route path="/items/:id" exact component={ItemDetails} />
        <Route path="/items/:id/edit" component={EditItem} />
        <Route path="/order" component={OrderList} />
        <Route path="/email" component={ContactUs} />
        <Route path="/bitcoin" component={Bitcoin} />
        <Route path="/contact" component={ContactMe} />
      </Switch>
    </div>
  );
}

export default App;
