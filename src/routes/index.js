const authRouter = require("./authRoute");
const prodRouter = require("./productRoute");
const cartRouter = require("./cartRoute");
const paymentRouter = require("./paymentRoute");

function route(app) {
  app.use("/", authRouter);
  app.use("/", prodRouter);
  app.use("/", cartRouter);
  app.use("/", paymentRouter);
}

module.exports = route;
