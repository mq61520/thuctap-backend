const express = require("express");
const router = express.Router();

const uploadProductImage = require("../common/uploadProductImage");
const productController = require("../controllers/productController");

router.get("/product/all", productController.get_all_product);
router.get("/product/:id", productController.get_product_by_id);
router.get("/product/brand/:brand", productController.get_product_by_brand);
router.get("/product/images/:id", productController.get_product_images_by_id);
router.get("/product/delete/:ma_sp", productController.remove_product);
router.post("/product/status", productController.update_status);
router.post("/product/promotion/update", productController.update_promotion);
router.post("/product/add", productController.add_product);
router.post(
  "/product/product_images",
  uploadProductImage.array("product_images", 12),
  productController.add_product_images
);
router.post("/product/update", productController.update_product);
router.post(
  "/product/update/images",
  uploadProductImage.array("product_images", 6),
  productController.update_product_images
);

module.exports = router;
