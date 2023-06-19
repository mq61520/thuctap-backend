const express = require("express");
const router = express.Router();

const uploadProductImage = require("../common/uploadProductImage");
const productController = require("../controllers/productController");

router.post("/product/add", productController.add_product);
router.post(
  "/product/product_images",
  uploadProductImage.array("product_images", 12),
  productController.add_product_images
);

module.exports = router;
