const bossModel = require("../model/bossModel");

const bossController = {
  getAllBoss: (_, res) => {
    bossModel
      .findAllBoss()
      .then(([boss]) => res.send(boss))
      .catch((err) => res.send(err));
  },
};

module.exports = bossController;
