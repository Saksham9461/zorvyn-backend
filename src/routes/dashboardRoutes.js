const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/dashboardController");

router.get("/summary", ctrl.getSummary);
router.get("/categories", ctrl.getCategoryBreakdown);
router.get("/trends", ctrl.getMonthlyTrends);

module.exports = router;