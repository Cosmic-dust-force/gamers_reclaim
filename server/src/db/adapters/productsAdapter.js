const { client } = require("../");

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

module.exports = { createProduct, getAllProducts, getAllProductsWithCategory };
