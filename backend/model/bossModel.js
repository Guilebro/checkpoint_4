const connexion = require("../config");

const db = connexion.promise();

const findAllBoss = () => {
  return db.query("SELECT * FROM boss");
};

module.exports = { findAllBoss };
