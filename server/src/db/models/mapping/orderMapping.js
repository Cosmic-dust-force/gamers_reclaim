function modelFromDb(dbOrder) {
  return {
    id: dbOrder.id,
    userId: dbOrder.user_id,
    orderDate: dbOrder.order_date,
  };
}

function dbFromModel(modelOrder) {
  return {
    id: modelOrder,
    user_id: modelOrder.userId,
    order_date: modelOrder.orderDate,
  };
}

module.exports = {
  modelFromDb,
  dbFromModel,
};
