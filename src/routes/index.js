const authRouter = require("./authRoute");
const prodRouter = require("./productRoute");

function route(app) {
  app.use("/", authRouter);
  app.use("/", prodRouter);
}

module.exports = route;
