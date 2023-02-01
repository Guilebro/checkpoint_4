const bossModel = require("../model/bossModel");

const bossController = {
  getAllBoss: (_, res) => {
    bossModel
      .findAllBoss()
      .then(([boss]) => res.send(boss))
      .catch((err) => res.send(err));
  },

  getBossById: (req, res) => {
    const { id } = req.params;
    bossModel
      .findOneBoss(id)
      .then(([boss]) => res.send(boss))
      .catch((err) => res.send(err));
  },
};

module.exports = bossController;
