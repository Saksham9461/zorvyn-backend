const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/recordController");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

router.post("/", auth, role("admin"), ctrl.createRecord);
router.get("/", auth, ctrl.getRecords);
router.patch("/:id", auth, role("admin"), ctrl.updateRecord);
router.delete("/:id", auth, role("admin"), ctrl.deleteRecord);

module.exports = router;