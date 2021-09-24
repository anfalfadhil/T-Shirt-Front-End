import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemDetails() {
  const [img, setImg] = useState({});
  const { imageid } = useParams();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios
      .get(`###${imageid}`)
      .then((response) => {
        console.log(response);
        setImg(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onDeleteHandeler = (event) => {
    const url = `${APIURL}/items/${match.params.id}`;

    fetch(url, { method: "DELETE" })
      .then((res) => {
        setDeleted(true);
      })
      .catch(console.error);
  };

  return (
    <div className="item-details-container">
      <h2 className="title">{img.title}</h2>
      <img className="chosen-item" src={img.image} />
      <button>Buy</button>
      <button onClick={onDeleteHandeler}>DELETE</button>
    </div>
  );
}

export default ItemDetails;
