const jwt = require("jsonwebtoken");
const userModel = require("../db/models/user");
const {
  AuthenticationRequiredError,
  AuthorizationRequiredError,
} = require("./errors");

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
    console.error(error);
    next(error);
  }
}

async function requireUser(req, res, next) {
  if (!req.user) {
    return next(AuthenticationRequiredError());
  }

  next();
}

async function requireAdmin(req, res, next) {
  if (!req.user && req.user.userRole !== "admin") {
    return next(AuthorizationRequiredError());
  }

  next();
}

module.exports = { useToken, requireUser, requireAdmin };
