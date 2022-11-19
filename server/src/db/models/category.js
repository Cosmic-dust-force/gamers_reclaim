const { getAllCategories } = require("../adapters/categoriesAdapter");

async function getAll() {
  const dbCategories = await getAllCategories();

  const modelCategories = dbCategories.map((dbCategory) => {
    return {
      id: dbCategory.id,
      categoryName: dbCategory.category_name,
    };
  });

  return modelCategories;
}

module.exports = { getAll };
