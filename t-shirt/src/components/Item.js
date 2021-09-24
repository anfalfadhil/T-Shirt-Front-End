import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Item() {
  const [data, setData] = useState([]);
  const [imageId, setImageId] = useState();
  const api_key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(`###${api_key}`)
      .then((response) => {
        setData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="item-container">
      {data.map((e) => {
        return (
          <Link to={`/item/${e.imageid}`} key={e.imageid}>
            <div className="card">
              <img src={e.baseimageurl} />
              <h2> Description</h2>
              <p>{e.desecription}</p>
              <button>Buy</button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Item;
