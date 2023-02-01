const connexion = require("../config");

const db = connexion.promise();

const findAllBoss = () => {
  return db.query("SELECT * FROM boss");
};

const findOneBoss = (id) => {
  return db.query("SELECT * FROM boss WHERE id = ? ", [id]);
};

module.exports = { findAllBoss, findOneBoss };
