import React from "react";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../config.js";

function ItemDetails( {match} ) {
  // const [img, setImg] = useState({});
  // const { imageid } = useParams();
  // const [deleted, setDeleted] = useState(false);
  const [item, setItem] = useState({});

  useEffect( () =>
  {
    axios.get(`${APIURL}/items/${match.params.id}`)
        .then( (response) =>
        {
          setItem(response.data);
        })
        .catch(function (error)
        {
          console.log(error);
        });
      
  }, [match.params.id]);

  // const onDeleteHandeler = (event) => {
  //   const url = `${APIURL}/items/${match.params.id}`;

  //   fetch(url, { method: "DELETE" })
  //     .then((res) => {
  //       setDeleted(true);
  //     })
  //     .catch(console.error);
  // };

  return (
    <div className="item-details-container">
      {/* <h2 className="title">{img.title}</h2>
      <img className="chosen-item" src={img.image} /> */}
      {/* <button onClick={onDeleteHandeler}>DELETE</button> */}

      <h2> {item.name} </h2>
      <button>Buy</button>

    </div>
  );
}

export default ItemDetails;
