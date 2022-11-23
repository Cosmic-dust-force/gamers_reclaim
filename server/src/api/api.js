const apiRouter = require("express").Router();
const usersRouter = require("./routes/users/usersRoute");
const productsRouter = require("./routes/products/productsRoute");
const categoriesRouter = require("./routes/categories/categoriesRoute");
const cartItemsRouter = require("./routes/cart_items/cartItemsRoute");

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

apiRouter.use("/cartItems", cartItemsRouter);

module.exports = apiRouter;
