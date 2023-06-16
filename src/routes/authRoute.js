const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.get("/account/get/:id", authController.get_acc_by_id);

router.post("/account/authentication", authController.authentication);

module.exports = router;
