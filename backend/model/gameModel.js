const connexion = require("../config");

const db = connexion.promise();

const findAllGame = () => {
  return db.query("SELECT * FROM game");
};

const findGameByBoss = (id) => {
  return db.query(
    "SELECT * FROM game INNER JOIN boss ON boss.game_id = game.id WHERE boss.id= ?",
    [id]
  );
};

module.exports = { findAllGame, findGameByBoss };
