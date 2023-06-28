const express = require("express");
const router = express.Router();

const productController = require("../controllers/promotionController");

router.get("/promotion/all", productController.get_promotions);
router.get("/promotion/id/:id", productController.get_by_id);
router.post("/promotion/add", productController.add_promotion);

module.exports = router;
