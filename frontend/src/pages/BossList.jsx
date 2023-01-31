import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import "./BossList.css";

function BossList() {
  const [bossList, setBossList] = useState([]);

  const getBossList = () => {
    const url = "http://localhost:8000/api/boss";
    axios.get(url).then((response) => setBossList(response.data));
  };

  useEffect(() => {
    getBossList();
  }, []);

  return (
    <div>
      <div className="main">
        {bossList.map((element) => (
          <div className="card">
            <div className="encart_double">
              <div className="name_box">{element.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BossList;
