const jwt = require("jsonwebtoken");
const { passwordsDoMatch } = require("../../../../security");
const usersModel = require("../../../db/models/user");
const {
  UserDoesNotExistError,
  UnexpectedServerError,
  PasswordDoesNotMatch,
} = require("../../errors");

const { JWT_SECRET } = process.env;

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await usersModel.getByEmail(email);
    if (!user) {
      return next(UserDoesNotExistError(email));
    }

    const isMatchingPassword = await passwordsDoMatch(password, user.password);

    if (!isMatchingPassword) {
      return next(PasswordDoesNotMatch());
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, userRole: user.userRole },
      JWT_SECRET
    );

    res.json({ token, user });
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

module.exports = {
  login,
};
