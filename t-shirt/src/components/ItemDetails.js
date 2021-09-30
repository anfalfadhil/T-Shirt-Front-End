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
    const [showCart, setShowCart] = useState(false);

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

    const addItemToCart = () => {
        axios
            .get(`${APIURL}/order`)
            .then((response) => {
                const order = response.data[0];
                const checkIndex = order.items.findIndex(
                    (element) => element._id === item._id
                );

                if (checkIndex === -1) {
                    const updatedOrder = {
                        ...order,
                        items: [...order.items, item._id],
                    };
                    console.log(updatedOrder);
                    return updatedOrder;
                }
                return order;
            })
            .then((orderUpdate) => {
                return axios.put(
                    `${APIURL}/order/${orderUpdate._id}`,
                    orderUpdate
                );
            })
            .then(() => {
                setShowCart(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const deleteItem = () => {
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

    if (showCart) {
        return <Redirect to="/order" />;
    }

    return (
        <div className="item-details-container">
            <h2> {item.name} </h2>
            <h3> {item.description} </h3>
            <h4> ${item.price} </h4>

            <Button 
                className="item-details-buttons"
                variant="outline-success" 
                onClick={addItemToCart} 
                >Add To Cart
            </Button>

            <Button
                className="item-details-buttons"
                variant="outline-primary" 
                onClick={editItem}
                >Edit
            </Button>

            <Button
                className="item-details-buttons"
                variant="outline-danger" 
                onClick={deleteItem}
                >Delete
            </Button>
        </div>
    );
}

export default ItemDetails;
