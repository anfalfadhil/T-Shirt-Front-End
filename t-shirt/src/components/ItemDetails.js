import React from "react";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../config.js";

function ItemDetails( {match} ) {
  // const [img, setImg] = useState({});
  // const { imageid } = useParams();
  const [deleted, setDeleted] = useState(false);
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

  const deleteItem = (event) =>
  {
    const url = `${APIURL}/items/${match.params.id}`;

    axios.delete(url)
      .then(response => { setDeleted(true) } )
      .catch(console.error)
      // .then((res) => {
      //   setDeleted(true);
      // })
      // .catch(console.error);
  };

  if (deleted)
  {
    return <Redirect to="/"/>;
  }

  return (
    <div className="item-details-container">
      {/* <h2 className="title">{img.title}</h2>
      <img className="chosen-item" src={img.image} /> */}
      {/* <button onClick={onDeleteHandeler}>DELETE</button> */}

      <h2> {item.name} </h2>
      <h2> {item.price} </h2>

      <button onClick={deleteItem}>Buy</button>

    </div>
  );
}

export default ItemDetails;
