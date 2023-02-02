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

  addBoss: (req, res) => {
    const bossData = req.body;
    bossModel
      .createOneBoss(bossData)
      .then((boss) => {
        if (boss.affectedRows !== 0) {
          res.status(201).send({
            message: "Nouvelle carte génerée !",
            bossId: boss.insertId,
          });
        } else {
          res.status(401).send({ message: "Erreur pour générer une carte" });
        }
      })
      .catch(() => {
        res.status(500).send({ message: "Les champs doivent etre complétés!" });
      });
  },
};

module.exports = bossController;
