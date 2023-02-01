const router = require("express").Router();
const gameController = require("../controller/gameController");

router.get("/", gameController.getAllGame);
router.get("/byBoss/:id", gameController.getGameByBoss);

module.exports = router;
