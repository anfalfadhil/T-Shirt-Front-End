import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../config";
import Button from "react-bootstrap/Button";

function OrderList() {
    const [data, setData] = useState([]);
    const [orderId, setOrderId] = useState(null);
    const url = `${APIURL}/order`;

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                console.log(res.data[0]);
                setData(res.data[0].items);
                setOrderId(res.data[0]._id);
            })
            .catch((err) => console.log(err));
    }, []);

    const removeItem = (itemId) => {
        return () => {
            const updatedList = data;
            const removeIndex = data.findIndex(
                (element) => element._id === itemId
            );
            updatedList.splice(removeIndex, 1);
            setData(updatedList);
            axios
                .put(`${url}/${orderId}`, { items: updatedList })
                .then(() => window.location.reload(false))
                .catch((err) => console.log(err));
        };
    };

    const clearCart = () => {
        axios
            .put(`${url}/${orderId}`, { items: [] })
            .then(() => window.location.reload(false))
            .catch((err) => console.log(err));
    };

    const closeoutCart = () => {
        const promiseArray = [];
        data.forEach((element) => {
            const itemPromise = axios.delete(`${APIURL}/items/${element._id}`);
            promiseArray.push(itemPromise);
        });

        Promise.all(promiseArray)
            .then(clearCart())
            .catch((err) => console.log(err));
    };

    return (
        <div className="order-container">
            {data.map((item) => (
                <div key={item._id} className="order-item">
                    <Link to={`/items/${item._id}`}>{item.name}</Link>
                    <div className="order-item-right-div">
                        <p>${item.price}</p>
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={removeItem(item._id)}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            ))}
            <Button variant="danger" onClick={clearCart}>
                Clear Cart
            </Button>
            <Button variant="primary" onClick={closeoutCart}>
                Finalize Purchase
            </Button>
        </div>
    );
}

export default OrderList;
