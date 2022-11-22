const jwt = require("jsonwebtoken");
const userModel = require("../db/models/user");

const { JWT_SECRET } = process.env;

async function useToken(req, res, next) {
  const prefix = "Bearer";
  const authorization = req.header("Authorization");

  try {
    if (!authorization) return next();

    const token = authorization.slice(prefix.length).trim();

    const { id } = jwt.verify(token, JWT_SECRET);

    if (id) {
      const user = await userModel.getById(id);

      if (user) {
        req.user = user;
      }
    }

    next();
  } catch (error) {
    console.error();
    next(error);
  }
}

module.exports = { useToken };
