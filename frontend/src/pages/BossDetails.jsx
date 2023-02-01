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
    <div className="general">
      <div className="div_card">
        {oneBoss.map((element) => (
          <>
            <div className="card_details">
              <span className="name_details">{element.name}</span>
              <span className="location_details">{element.location}</span>
              <span className="mandatory_details">{`Obligatoire: ${element.mandatory}`}</span>
              <div className="description_details">{element.description}</div>
              <span className="difficulty_details">{`🌶️ ${element.difficulty}/10`}</span>
              <div
                style={{ backgroundImage: `url(${element.picture}` }}
                className="image_details"
              >
                {/* <ImageCard picture={picture} /> */}
              </div>
            </div>
            <div className="video_details">
              <div className="div_combat">
                <p className="combat">DÉROULEMENT DU COMBAT</p>
              </div>
              <iframe
                width="560"
                height="315"
                src={element.video}
                title="Video"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default BossDetails;
