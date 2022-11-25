const cartItemsModel = require("../../../db/models/cartItem");
const productsModel = require("../../../db/models/product");
const {
  UnexpectedServerError,
  AuthorizationRequiredError,
  ItemInCartError,
  InsufficientInventoryError,
} = require("../../errors");

async function addItemToCart(req, res, next) {
  try {
    const cartItems = await cartItemsModel.itemsInCartForUser(req.user.id);

    const item = cartItems.find((cartItem) => {
      return cartItem.productId === Number(req.body.productId);
    });

    if (item) {
      return next(ItemInCartError());
    }

    const newCartItem = await cartItemsModel.create(req.body);

    return res.json(newCartItem);
  } catch (error) {
    console.error(error);
    next(UnexpectedServerError());
  }
}

async function updateItemQuantity(req, res, next) {
  try {
    const { productId, quantity } = req.body;

    const remainingProductQuantity = await productsModel.getQuantityForId(
      productId
    );

    if (quantity > remainingProductQuantity) {
      return next(InsufficientInventoryError(remainingProductQuantity));
    }

    const updatedCartItem = await cartItemsModel.update({
      id: req.params.id,
      quantity,
    });

    return res.json(updatedCartItem);
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

module.exports = { addItemToCart, updateItemQuantity, getUserCart };
