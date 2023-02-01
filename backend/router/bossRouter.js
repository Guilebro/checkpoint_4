const router = require("express").Router();
const bossController = require("../controller/bossController");

router.get("/boss", bossController.getAllBoss);
router.get("/boss/:id", bossController.getBossById);

module.exports = router;
