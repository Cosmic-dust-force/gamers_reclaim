const { client } = require("../");
const {
  generateInsertColumns,
  generateInsertValues,
  generateUpdateQuery,
} = require("../queryUtil");

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

async function updateCartItem({ id, ...fields }) {
  const updateQuery = generateUpdateQuery(fields);

  try {
    const {
      rows: [updatedCartItem],
    } = await client.query(
      `
      UPDATE cart_items 
      SET ${updateQuery}
      WHERE id = ${id}
      RETURNING *
      `,
      Object.values(fields)
    );

    return updatedCartItem;
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

async function destroyCartItem(id) {
  try {
    const {
      rows: [destroyedCartItem],
    } = await client.query(
      `
              DELETE FROM cart_items
              WHERE id = $1
              RETURNING *
          `,
      [id]
    );
    return destroyedCartItem;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addUserCartItemsToOrder(userId, orderId) {
  try {
    const { rows: updatedCartItems } = await client.query(
      `
              UPDATE cart_items
              SET order_id = $1
              WHERE user_id = $2
              AND order_id IS NULL
              RETURNING id, quantity, product_id, price_usd
          `,
      [orderId, userId]
    );

    return updatedCartItems;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  createCartItem,
  updateCartItem,
  getAllCartItems,
  getCartItemsInCartForUser,
  destroyCartItem,
  addUserCartItemsToOrder,
};
