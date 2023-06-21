const authRouter = require("./authRoute");
const prodRouter = require("./productRoute");
const cartRouter = require("./cartRoute");

function route(app) {
  app.use("/", authRouter);
  app.use("/", prodRouter);
  app.use("/", cartRouter);
}

module.exports = route;
