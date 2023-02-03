import axios from "axios";
import React, { useState, useEffect } from "react";
import AddCardInput from "../components/AddCardInput";
import { useAuth } from "../contexts/AuthContext";
import inputArray from "../utils/input_array";
import "./AddCard.css";

function AddCard() {
  const { getGameList, gameList } = useAuth();
  const [gameSelected, SetGameSelected] = useState("");
  const [addNewBoss, setAddNewBoss] = useState({
    name: null,
    localisation: null,
    picture: null,
    description: null,
    mandatory: null,
    difficulty: null,
    video: null,
  });

  useEffect(() => {
    getGameList();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/boss";
    if (
      gameSelected === "" ||
      addNewBoss.name === null ||
      addNewBoss.localisation === null ||
      addNewBoss.picture === null ||
      addNewBoss.description === null ||
      addNewBoss.mandatory === null ||
      addNewBoss.difficulty === null
    ) {
      alert("Les champs doivent etre complétés !!");
    } else {
      axios
        .post(url, {
          game_id: gameSelected,
          name: addNewBoss.name,
          location: addNewBoss.localisation,
          picture: addNewBoss.picture,
          description: addNewBoss.description,
          mandatory: addNewBoss.mandatory,
          difficulty: addNewBoss.difficulty,
          video: addNewBoss.video,
        })
        .then((res) => {
          if (res.status === 201) {
            alert(res.data.message);
          }
          setAddNewBoss({
            name: null,
            localisation: null,
            picture: null,
            description: null,
            mandatory: null,
            difficulty: null,
            video: null,
          });
          SetGameSelected("");
        });
    }
  };
  const handleChange = (e) => {
    SetGameSelected(e.target.value);
  };
  return (
    <div className="main_addCard_div">
      <h1 className="add_title">CRÉER VOTRE CARTE </h1>
      <form className="add_form" action="add_card" onSubmit={handleSubmit}>
        <select
          className="game_select"
          name="game_select"
          id="game"
          onChange={handleChange}
        >
          <option value="">Choisissez votre jeu</option>
          {gameList.map((el) => (
            <option value={el.id}>{el.title}</option>
          ))}
        </select>
        {inputArray.map((element) => (
          <AddCardInput
            id={element.id}
            label={element.label}
            value={addNewBoss[element.name] || ""}
            type={element.type}
            name={element.name}
            placeholder={element.placeholder}
            addNewBoss={addNewBoss}
            setAddNewBoss={setAddNewBoss}
          />
        ))}
        <button className="add_button" type="submit">
          Générer
        </button>
      </form>
    </div>
  );
}

export default AddCard;
