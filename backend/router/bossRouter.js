const router = require("express").Router();
const bossController = require("../controller/bossController");

router.get("/", bossController.getAllBoss);
router.get("/:id", bossController.getBossById);
router.post("/", bossController.addBoss);
router.delete("/:id", bossController.deleteOneBoss);

module.exports = router;
