import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import inputArray from "../utils/input_array";
import UpdateCardInput from "../components/UpdateCardInput";
import { useAuth } from "../contexts/AuthContext";

const updateCard = () => {
  const { id } = useParams();
  const { oneBoss } = useAuth();
  const [updateBoss, setUpdateBoss] = useState({
    name: oneBoss.name || null,
    localisation: oneBoss.location || null,
    picture: oneBoss.picture || null,
    description: oneBoss.description || null,
    mandatory: oneBoss.mandatory || null,
    difficulty: oneBoss.difficulty || null,
    video: oneBoss.video || null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/api/boss/${id}`;
    axios
      .put(url, {
        name: updateBoss.name || oneBoss.name,
        location: updateBoss.localisation || oneBoss.localisation,
        picture: updateBoss.picture || oneBoss.picture,
        description: updateBoss.description || oneBoss.description,
        mandatory: updateBoss.mandatory || oneBoss.mandatory,
        difficulty: updateBoss.difficulty || oneBoss.difficulty,
        video: updateBoss.video || oneBoss.video,
      })
      .then(alert("La carte à été modifiée 😁"));
  };
  return (
    <div>
      <form action="update_card" onSubmit={handleSubmit}>
        {inputArray.map((element) => (
          <UpdateCardInput
            id={element.id}
            label={element.label}
            value={updateBoss[element.name] || ""}
            type={element.type}
            name={element.name}
            placeholder={element.placeholder}
            updateBoss={updateBoss}
            setUpdateBoss={setUpdateBoss}
          />
        ))}
        <button className="button" type="submit">
          Générer
        </button>
      </form>
    </div>
  );
};

export default updateCard;
