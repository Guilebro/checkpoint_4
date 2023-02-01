const express = require("express");
const bossRouter = require("./bossRouter");
const gameRouter = require("./gameRouter");

const router = express.Router();

router.use("/boss", bossRouter);
router.use("/game", gameRouter);

module.exports = router;
