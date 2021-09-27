import React from "react";
import { useEffect, useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { Redirect } from "react-router-dom";

function PostNewItem(props) {
  const [item, setItem] = useState({});
  const [createdId, setCreatedId] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${APIURL}/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        setCreatedId(data._id);
      })
      .catch(() => {
        setError(true);
      });
  };

  const handleChange = (event) => {
    event.persist();
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  if (createdId) {
    return <Redirect to={`/items/${createdId}`} />;
  }

  return (
    <div className="new-item-container">
      {error && <p>Something went wrong...Please try again!</p>}
      <NewItemForm
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ItemDetails;
