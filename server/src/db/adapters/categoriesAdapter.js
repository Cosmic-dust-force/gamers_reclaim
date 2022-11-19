const { client } = require("../");

async function createCategory({ id, categoryName }) {
  try {
    const {
      rows: [newCategory],
    } = await client.query(
      `
        INSERT INTO categories(id, category_name)
        VALUES($1, $2)
        RETURNING *
        `,
      [id, categoryName]
    );

    return newCategory;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllCategories() {
  try {
    const { rows: categories } = await client.query(`
        SELECT * FROM categories
    `);

    return categories;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { createCategory, getAllCategories };
