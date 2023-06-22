const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/cart/amount/:user_id", cartController.get_amount_cart);
// router.get("/cart_items/:user_id", cartController.get_items_cart);
router.get("/cart/list_product/:user_id", cartController.get_list_product);
router.post("/cart/add", cartController.add_to_cart);
router.post("/cart/update_amount", cartController.update_amount);
router.get("/cart/delete/:gh_id", cartController.remove_from_cart);

module.exports = router;
