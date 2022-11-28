const { client } = require("../");
const { generateUpdateQuery } = require("../queryUtil");

async function createProduct({
  productName,
  priceUsd,
  inventoryQuantity,
  description,
  categoryId,
  brand,
  imageUrl,
}) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
            INSERT INTO products(
                product_name, price_usd, inventory_quantity, description, category_id, brand, image_url)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                RETURNING *
            ;
        `,
      [
        productName,
        priceUsd,
        inventoryQuantity,
        description,
        categoryId,
        brand,
        imageUrl,
      ]
    );

    return product;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateProduct({ id, ...fields }) {
  const updateQuery = generateUpdateQuery(fields);

  try {
    const {
      rows: [product],
    } = await client.query(
      `
            UPDATE products
            SET ${updateQuery}
            RETURNING *;
        `,
      Object.values(fields)
    );

    return product;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllProducts() {
  try {
    const { rows: products } = await client.query(`
        SELECT * FROM products;
        `);

    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllProductsWithCategory() {
  try {
    const { rows: products } = await client.query(`
        SELECT products.* , categories.category_name 
        FROM products
        JOIN categories
        ON products.category_id = categories.id;
        `);

    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getProductQuantity(id) {
  try {
    const {
      rows: [row],
    } = await client.query(
      `
        SELECT inventory_quantity 
        FROM products
        WHERE id = $1
        `,
      [id]
    );

    return row["inventory_quantity"];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function destroyProduct(id) {
  try {
    const {
      rows: [destroyedProduct],
    } = await client.query(
      `
        DELETE FROM products 
        WHERE id = $1
        RETURNING *;
        `,
      [id]
    );

    return destroyedProduct;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  createProduct,
  updateProduct,
  getAllProducts,
  getAllProductsWithCategory,
  getProductQuantity,
  destroyProduct,
};
