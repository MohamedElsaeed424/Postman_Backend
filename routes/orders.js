const express = require("express");

const ordersController = require("../controllers/orders");
const isAuth = require("../middleware/is-auth");
const router = express.Router();

router.post("/order", isAuth, ordersController.createOrder);

router.get("/order/:orderId", isAuth, ordersController.getOrder);

router.get("/orders", isAuth, ordersController.getOrders);

module.exports = router;
