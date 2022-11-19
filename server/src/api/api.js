const apiRouter = require("express").Router();
const usersRouter = require("./routes/users/usersRoute");
const productsRouter = require("./routes/products/productsRoute");
const categoriesRouter = require("./routes/categories/categoriesRoute");

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

apiRouter.use("/categories", categoriesRouter);

module.exports = apiRouter;
