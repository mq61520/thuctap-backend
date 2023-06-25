const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/paymentController");

// //order - custommer page
router.get("/order/all", paymentController.get_all_order);
router.post("/order/user", paymentController.get_order_by_user);
// router.post("/order/status", orderController.get_order_by_status);
router.post("/order/add", paymentController.add_order);
router.get("/order/cancel/:dh_id", paymentController.cancel_order);

// //order - admin page
// router.get("/order/status/:status", orderController.get_order_by_status_admin);
router.get("/order/confirm/:ma_dh", paymentController.confirm_order);
router.post("/order/update/status", paymentController.update_status_order);

// //detail order
router.get("/order/detail/:dh_id", paymentController.get_detial_order);

module.exports = router;
