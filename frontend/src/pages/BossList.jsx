import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import "./BossList.css";
import ImageCard from "../components/ImageCard";

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
            {/* <div className="encart_double">
              <div className="name_box">{element.name}</div>
            </div> */}

            <span className="name">{element.name}</span>
            <span className="location">{element.location}</span>
            <span className="mandatory">{`Obligatoire: ${element.mandatory}`}</span>
            <div className="description">{element.description}</div>
            <span className="difficulty">{`🌶️ ${element.difficulty}/10`}</span>
            <div className="image">
              <ImageCard picture={element.picture} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BossList;
