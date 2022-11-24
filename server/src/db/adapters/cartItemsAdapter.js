const { client } = require("../");
const { generateInsertColumns, generateInsertValues } = require("../queryUtil");

async function createCartItem(fields) {
  try {
    const insertColumns = generateInsertColumns(fields);
    const insertValues = generateInsertValues(fields);

    const {
      rows: [cartItem],
    } = await client.query(
      `
        INSERT INTO cart_items (${insertColumns})
        VALUES (${insertValues})
        ON CONFLICT DO NOTHING
        RETURNING *;
    `,
      Object.values(fields)
    );

    return cartItem;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllCartItems() {
  try {
    const { rows: cartItems } = await client.query(`
              SELECT * FROM cart_items;
          `);
    return cartItems;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getCartItemsInCartForUser(userId) {
  try {
    const { rows: cartItems } = await client.query(
      `
              SELECT * FROM cart_items
              WHERE user_id = $1
              AND order_id IS NULL
          `,
      [userId]
    );
    return cartItems;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { createCartItem, getAllCartItems, getCartItemsInCartForUser };
