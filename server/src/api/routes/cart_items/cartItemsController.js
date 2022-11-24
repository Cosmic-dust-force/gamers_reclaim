const cartItemsModel = require("../../../db/models/cartItem");
const {
  UnexpectedServerError,
  AuthorizationRequiredError,
} = require("../../errors");

async function addItemToCart(req, res, next) {
  try {
    const newCartItem = await cartItemsModel.create(req.body);

    return res.json(newCartItem);
  } catch (error) {
    console.error(error);
    next(UnexpectedServerError());
  }
}

async function getUserCart(req, res, next) {
  try {
    const { userId } = req.params;

    if (req.user.id != userId) {
      return next(AuthorizationRequiredError());
    }

    const cartItems = await cartItemsModel.itemsInCartForUser(userId);

    return res.json(cartItems);
  } catch (error) {
    console.error(error);
    next(UnexpectedServerError());
  }
}

module.exports = { addItemToCart, getUserCart };
