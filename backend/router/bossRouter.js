const router = require("express").Router();
const bossController = require("../controller/bossController");

router.get("/", bossController.getAllBoss);
router.get("/:id", bossController.getBossById);
router.post("/", bossController.addBoss);

module.exports = router;
