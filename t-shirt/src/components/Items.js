import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { APIURL } from "../config.js";
import SearchBar from "./SearchBar.js";

function Items() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${APIURL}/items`)
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
<<<<<<< HEAD

  return (
    <div className="item-container">
      <SearchBar onSubmit={setData} />
      {console.log(data)};
      {data.map((item) => {
        return (
          <div className="card" key={item._id}>
            <Link to={`/items/${item._id}`}>
              <h2> {item.name} </h2>
              <h2>${item.price}</h2>
              <img src={item.image} />
            </Link>
          </div>
        );
      })}
    </div>
  );
=======

  return (
    <div className="item-container">
      {console.log(data)}
      {data.map((item) => {
        return (
          <div className="card" key={item._id}>
            <Link to={`/items/${item._id}`}>
              <h2> {item.name} </h2>
              <img src={item.image} />
            </Link>
          </div>
        );
      })}
    </div>
  );

    return (
        <div className="item-container">
            <SearchBar onSubmit={setData} />
            {data.map((item) => {
                return (
                    <div className="card" key={item._id}>
                        <Link to={`/items/${item._id}`}>
                            <h2> {item.name} </h2>
                            <h4> {item.description} </h4>
                        </Link>
                    </div>
                );
            })}
        </div>
    );

>>>>>>> e49a742f280343107c13daadbc45acf2ecdd6ce4
}

export default Items;
