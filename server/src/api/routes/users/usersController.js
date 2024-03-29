const jwt = require("jsonwebtoken");
const { passwordsDoMatch, hashPassword } = require("../../../../security");
const usersModel = require("../../../db/models/user");
const {
  UserDoesNotExistError,
  UnexpectedServerError,
  PasswordDoesNotMatchError,
  UserAlreadyExistsError,
} = require("../../errors");

const { JWT_SECRET } = process.env;

async function getCustomers(req, res, next) {
  try {
    const customers = await usersModel.getAllCustomers();

    return res.json(customers);
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const { password: storedPassword, ...user } = await usersModel.getByEmail(
      email
    );
    if (!user) {
      return next(UserDoesNotExistError(email));
    }

    const isMatchingPassword = await passwordsDoMatch(password, storedPassword);

    if (!isMatchingPassword) {
      return next(PasswordDoesNotMatchError());
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, userRole: user.userRole },
      JWT_SECRET
    );

    return res.json({ token, user });
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

async function register(req, res, next) {
  try {
    const user = req.body;

    if (user.userRole !== "guest") {
      user.password = await hashPassword(user.password);
    }

    const existingUserWithEmail = await usersModel.getByEmail(user.email);

    if (existingUserWithEmail) {
      return next(UserAlreadyExistsError(user.email));
    }

    const newUser = await usersModel.create(user);

    const token = jwt.sign(
      { id: newUser.id, name: newUser.name, userRole: newUser.userRole },
      JWT_SECRET
    );

    return res.json({ token, user: newUser });
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

module.exports = {
  getCustomers,
  login,
  register,
};
