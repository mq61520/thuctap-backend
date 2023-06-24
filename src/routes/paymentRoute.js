const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/paymentController");

// //order - custommer page
router.post("/order/user", paymentController.get_order_by_user);
// router.post("/order/status", orderController.get_order_by_status);
router.post("/order/add", paymentController.add_order);
router.get("/order/cancel/:dh_id", paymentController.cancel_order);

// //order - admin page
// router.get("/order/status/:status", orderController.get_order_by_status_admin);
// router.get("/order/confirm/:ma_dh", orderController.confirm_order);
// router.post("/order/update_status", orderController.change_order_status);

// //detail order
router.get("/order/detail/:dh_id", paymentController.get_detial_order);

module.exports = router;
