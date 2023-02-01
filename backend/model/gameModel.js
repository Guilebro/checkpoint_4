const connexion = require("../config");

const db = connexion.promise();

const findAllGame = () => {
  return db.query("SELECT * FROM game");
};

module.exports = { findAllGame };
