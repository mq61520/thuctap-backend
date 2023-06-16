const authRouter = require("./authRoute");

function route(app) {
  app.use("/", authRouter);
}

module.exports = route;
