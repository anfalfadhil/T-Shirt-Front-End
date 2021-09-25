import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { APIURL } from "../config.js";

function Items() {
  const [data, setData] = useState([]);
  // const [imageId, setImageId] = useState();
  // const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() =>
  {
    axios.get(`${APIURL}/items`)
        .then( (response) =>
        {
          setData(response.data);
        })
        .catch(function (error)
        {
          console.log(error);
        });
      
  }, []);

  return (
    <div className="item-container">
      {data.map( (item) =>
      {
        return (
          <Link to={`/items/${item._id}`} key={item._id}>
            <div className="card">
              {/* <img src={e.baseimageurl} alt=""/> */}
              <h2> {item.name} </h2>
              <p>{item.description}</p>
              <button type="submit">Buy</button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Items;
