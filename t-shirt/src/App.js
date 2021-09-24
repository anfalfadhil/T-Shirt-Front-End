import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="App">
            <header>
                <h1> Welcome to T-Shirt</h1>
            </header>
            <SearchBar />
            <Switch></Switch>
        </div>
    );
}

export default App;
