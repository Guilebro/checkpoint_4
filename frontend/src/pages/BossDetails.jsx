import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import ReactPlayer from "react-player";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import "./BossDetails.css";

function BossDetails() {
  const { getOneBoss, oneBoss } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [gameByBoss, setGameByBoss] = useState([]);

  const getGameByBoss = (idByBoss) => {
    const url2 = `http://localhost:8000/api/game/byBoss/${idByBoss}`;
    axios.get(url2).then((res) => setGameByBoss(res.data));
  };

  useEffect(() => {
    getOneBoss(id);
    getGameByBoss(id);
  }, []);

  const handleClick = () => {
    const url3 = `http://localhost:8000/api/boss/${id}`;
    axios.delete(url3).then(alert("La carte à été supprimée!"));
    navigate("/boss");
  };

  const handleNavigate = () => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="general">
      <button className="remove_button" type="button" onClick={handleClick}>
        X
      </button>
      <button className="update_button" type="button" onClick={handleNavigate}>
        Modifier
      </button>
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
              />
            </div>
            <div className="video_details">
              <p className="combat">DÉROULEMENT DU COMBAT</p>
              <ReactPlayer
                url={element.video}
                width="45vw"
                height="50vh"
                style={{ backgroundColor: "black" }}
              />
            </div>
          </>
        ))}
      </div>
      {gameByBoss.map((el) => (
        <div className="game_name">
          <span style={{ fontSize: "0.75rem" }}>from</span> {el.title}
        </div>
      ))}
    </div>
  );
}

export default BossDetails;
