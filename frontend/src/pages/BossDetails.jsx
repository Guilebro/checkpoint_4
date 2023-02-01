import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { useParams } from "react-router-dom";

import "./BossDetails.css";

function BossDetails() {
  const { id } = useParams();
  const [oneBoss, setOneBoss] = useState([]);

  const getOneBoss = (bossId) => {
    const url = `http://localhost:8000/api/boss/${bossId}}`;
    axios.get(url).then((response) => setOneBoss(response.data));
  };

  useEffect(() => {
    getOneBoss(id);
  }, []);

  return (
    <div>
      {oneBoss.map((element) => (
        <div className="card">
          <span className="name">{element.name}</span>
          <span className="location">{element.location}</span>
          <span className="mandatory">{`Obligatoire: ${element.mandatory}`}</span>
          <div className="description">{element.description}</div>
          <span className="difficulty">{`🌶️ ${element.difficulty}/10`}</span>
          <div
            style={{ backgroundImage: `url(${element.picture}` }}
            className="image"
          >
            {/* <ImageCard picture={picture} /> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BossDetails;
