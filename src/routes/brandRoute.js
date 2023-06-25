const express = require("express");
const router = express.Router();

const brandController = require("../controllers/brandController");

router.get("/brands", brandController.get_all_brand);
router.get("/brand/id/:id", brandController.get_all_brand_by_id);

module.exports = router;
