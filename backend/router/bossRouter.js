const router = require("express").Router();
const bossController = require("../controller/bossController");

router.get("/boss", bossController.getAllBoss);
router.get("/title/:id", bossController.getTitleByBossId);

module.exports = router;
