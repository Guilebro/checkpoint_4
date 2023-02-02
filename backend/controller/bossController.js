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

  deleteOneBoss: (req, res) => {
    const { id } = req.params;
    bossModel.removeOneBoss(id).then((result) => {
      if (result.affectedRows !== 0) {
        res.send(`Le carte de boss à été supprimé`);
      } else {
        res.status(400).send("Boss introuvable");
      }
    });
  },

  updateOneBoss: (req, res) => {
    const { id } = req.params;
    const bossData = req.body;
    bossModel.modifyOneBoss(bossData, id).then((result) => {
      if (result.affectedRows !== 0) {
        res.send("La carte à été modifiée!");
      } else {
        res.status(400).send(" Modification impossible...");
      }
    });
  },
};

module.exports = bossController;
