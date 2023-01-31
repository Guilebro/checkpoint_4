const connexion = require("../config");

const db = connexion.promise();

const findAllBoss = () => {
  return db.query("SELECT * FROM boss");
};

const findTitleByBossId = (id) => {
  return db.query(
    "SELECT * FROM game INNER JOIN boss ON game.id = boss.game_id WHERE boss.id = ?",
    [Number(id)]
  );
};

module.exports = { findAllBoss, findTitleByBossId };
