const gameModel = require("../model/gameModel");

const gameController = {
  getAllGame: (_, res) => {
    gameModel
      .findAllGame()
      .then(([game]) => res.send(game))
      .catch((err) => res.send(err));
  },

  getGameByBoss: (req, res) => {
    const { id } = req.params;
    gameModel
      .findGameByBoss(id)
      .then(([game]) => res.send(game))
      .catch((err) => res.send(err));
  },
};

module.exports = gameController;
