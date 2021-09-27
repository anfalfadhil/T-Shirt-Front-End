import React from "react";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../config.js";
import Button from "react-bootstrap/Button";

function ItemDetails({ match }) {
    const [deleted, setDeleted] = useState(false);
    const [item, setItem] = useState({});
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        axios
            .get(`${APIURL}/items/${match.params.id}`)
            .then((response) => {
                setItem(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [match.params.id]);

    const deleteItem = (event) => {
        const url = `${APIURL}/items/${match.params.id}`;

        axios
            .delete(url)
            .then((response) => {
                setDeleted(true);
            })
            .catch(console.error);
    };

    const editItem = () => {
        setEditing(true);
    };

    if (deleted) {
        return <Redirect to="/" />;
    }

    if (editing) {
        return <Redirect to={`/items/${match.params.id}/edit`} />;
    }

    return (
        <div className="item-details-container">
            <h2> {item.name} </h2>
            <h3> {item.description} </h3>
            <h3> {item.price} </h3>

            <Button variant="secondary" onClick={deleteItem}>
                Buy
            </Button>
            <Button variant="secondary" onClick={editItem}>
                Edit
            </Button>
        </div>
    );
}

export default ItemDetails;
