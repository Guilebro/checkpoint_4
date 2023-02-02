const connexion = require("../config");

const db = connexion.promise();

const findAllBoss = () => {
  return db.query("SELECT * FROM boss");
};

const findOneBoss = (id) => {
  return db.query("SELECT * FROM boss WHERE id = ? ", [id]);
};

const createOneBoss = (payload) => {
  return db.query("INSERT INTO boss SET ?", [payload]);
};

module.exports = { findAllBoss, findOneBoss, createOneBoss };
