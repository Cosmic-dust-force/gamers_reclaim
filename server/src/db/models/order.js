const { createOrder } = require("../adapters/ordersAdapter");
const { dbFromModel } = require("./mapping/orderMapping");
const { orderItemsInUserCart } = require("./cartItem");

async function checkout(userId, orderDate) {
  const dbOrder = dbFromModel({ userId, orderDate });

  const newOrder = await createOrder(dbOrder);

  const orderItems = await orderItemsInUserCart(userId, newOrder.id);
  newOrder.items = orderItems;

  return newOrder;
}

module.exports = { checkout };
