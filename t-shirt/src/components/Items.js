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
          
            <div className="card" key={item._id}>
              {/* <img src={e.baseimageurl} alt=""/> */}
              <Link to={`/items/${item._id}`}> 
                <h2> {item.name} </h2>
                <h4> {item.description} </h4>
              </Link>
              
            </div>
          
        );
      })}
    </div>
  );
}

export default Items;
