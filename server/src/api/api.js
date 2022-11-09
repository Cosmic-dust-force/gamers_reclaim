const apiRouter = require('express').Router();
const usersRouter = require("./routes/users/usersRoute");

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});

apiRouter.use("/users", usersRouter);

// place your routers here

module.exports = apiRouter;
