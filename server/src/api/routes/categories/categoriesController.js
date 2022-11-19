const categoryModel = require("../../../db/models/category");
const { UnexpectedServerError } = require("../../errors");

async function getAllCategories(req, res, next) {
  try {
    const categories = await categoryModel.getAll();
    return res.json(categories);
  } catch (error) {
    console.error(error);
    next(UnexpectedServerError());
  }
}

module.exports = { getAllCategories };
