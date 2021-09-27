import React from "react";
import { Link } from "react-router-dom";

function OrderList({ items }) {
    return (
        <div className="order-container">
            {items.map((item) => (
                <div key={item._id} className="order-item">
                    <Link to={`/item/${item._id}`}>{item.name}</Link>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default OrderList;
