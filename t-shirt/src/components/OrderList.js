import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../config";

function OrderList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = `${APIURL}/order`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data[0].items[0].seedOrderItems);
                setData(res.data[0].items[0].seedOrderItems);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="order-container">
            {data.map((item) => (
                <div key={item._id} className="order-item">
                    <Link to={`/item/${item._id}`}>{item.name}</Link>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default OrderList;
