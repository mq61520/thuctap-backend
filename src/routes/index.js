const authRouter = require("./authRoute");
const prodRouter = require("./productRoute");
const cartRouter = require("./cartRoute");
const paymentRouter = require("./paymentRoute");
const brandRouter = require("./brandRoute");
const promotionRouter = require("./promotionRoute");

function route(app) {
  app.use("/", authRouter);
  app.use("/", prodRouter);
  app.use("/", cartRouter);
  app.use("/", paymentRouter);
  app.use("/", brandRouter);
  app.use("/", promotionRouter);
}

module.exports = route;
