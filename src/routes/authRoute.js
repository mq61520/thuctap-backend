const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.get("/account/get/:id", authController.get_acc_by_id);
router.post("/account/authentication", authController.authentication);
router.post("/account/register", authController.register);
router.post("/account/change", authController.change_phone_and_address);

module.exports = router;
