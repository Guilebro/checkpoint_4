const router = require("express").Router();
const gameController = require("../controller/gameController");

router.get("/", gameController.getAllGame);

module.exports = router;
