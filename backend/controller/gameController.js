const gameModel = require("../model/gameModel");

const gameController = {
  getAllGame: (_, res) => {
    gameModel
      .findAllGame()
      .then(([game]) => res.send(game))
      .catch((err) => res.send(err));
  },
};

module.exports = gameController;
