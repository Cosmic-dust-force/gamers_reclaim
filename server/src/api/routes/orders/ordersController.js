const ordersModel = require("../../../db/models/order");
const { UnexpectedServerError } = require("../../errors");

const moment = require("moment");

async function checkoutUserCart(req, res, next) {
  try {
    const dateNow = moment().format("YYYY-MM-DD HH:mm:ss");
    const newOrder = await ordersModel.checkout(req.user.id, dateNow);

    return res.json(newOrder);
  } catch (error) {
    console.error(error);
    next(UnexpectedServerError());
  }
}

module.exports = { checkoutUserCart };
