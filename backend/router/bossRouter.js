const router = require("express").Router();
const bossController = require("../controller/bossController");

router.get("/boss", bossController.getAllBoss);

module.exports = router;
