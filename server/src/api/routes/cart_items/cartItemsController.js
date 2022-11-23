const cartItemsModel = require("../../../db/models/cartItem");
const { UnexpectedServerError } = require("../../errors");

async function addItemToCart(req, res, next) {
  try {
    const newCartItem = await cartItemsModel.create(req.body);

    return res.json(newCartItem);
  } catch (error) {
    console.error(error);
    next(UnexpectedServerError());
  }
}

module.exports = { addItemToCart };
