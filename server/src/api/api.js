const apiRouter = require("express").Router();
const productsRouter = require("./routes/products/productsRoute");
const usersRouter = require("./routes/users/usersRoute");

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
});

apiRouter.use("/users", usersRouter);

apiRouter.use("/products", productsRouter);

module.exports = apiRouter;
