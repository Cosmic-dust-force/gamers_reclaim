const { client } = require("../");

async function createOrder({ order_date, user_id }) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
              INSERT INTO orders(
                  order_date, user_id)
                  VALUES ($1, $2)
                  RETURNING *
              ;
          `,
      [order_date, user_id]
    );

    return order;
  } catch (error) {
    console.error;
    throw error;
  }
}

module.exports = { createOrder };
