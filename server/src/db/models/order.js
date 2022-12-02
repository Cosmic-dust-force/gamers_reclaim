const { getAllOrders, createOrder } = require("../adapters/ordersAdapter");
const cartItemsModel = require("../models/cartItem");
const { dbFromModel, modelFromDb } = require("./mapping/orderMapping");
const { orderItemsInUserCart } = require("./cartItem");

async function getAll() {
  const dbOrders = await getAllOrders();
  const modelOrders = dbOrders.map(modelFromDb);

  const cartItems = await cartItemsModel.getAll();

  const ordersWithItems = modelOrders.map((order) => {
    order.items = cartItems.filter((cartItem) => cartItem.orderId === order.id);
    return order;
  });

  return ordersWithItems;
}

async function checkout(userId, orderDate) {
  const dbOrder = dbFromModel({ userId, orderDate });

  const newOrder = await createOrder(dbOrder);

  const orderItems = await orderItemsInUserCart(userId, newOrder.id);
  newOrder.items = orderItems;

  return newOrder;
}

module.exports = { getAll, checkout };
