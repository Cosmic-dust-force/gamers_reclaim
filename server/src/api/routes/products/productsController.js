const path = require("node:path");
const productsModel = require("../../../db/models/product");
const {
  UnexpectedServerError,
  ProductAlreadyExistsError,
  FileIsNotImageError,
} = require("../../errors");

function createPathToImageFile(file) {
  return path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "public",
    "product_images",
    file.name
  );
}

async function isExistingProductWithName(product) {
  return (
    product.productName && (await productsModel.getByName(product.productName))
  );
}

async function addProduct(req, res, next) {
  try {
    const product = req.body;

    if (isExistingProductWithName(product)) {
      return next(ProductAlreadyExistsError(product.productName));
    }

    const newProduct = await productsModel.create(product);

    return res.json(newProduct);
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

async function updateProduct(req, res, next) {
  try {
    const { productId } = req.params;

    const product = req.body;
    product.id = productId;

    if (isExistingProductWithName(product)) {
      return next(ProductAlreadyExistsError(product.productName));
    }

    const updatedProduct = await productsModel.update(product);

    return res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

async function getAllProducts(req, res, next) {
  try {
    const products = await productsModel.getAll();

    return res.json(products);
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

async function removeProduct(req, res, next) {
  try {
    const { productId } = req.params;
    const removedProduct = await productsModel.destroy(productId);

    return res.json(removedProduct);
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

async function uploadProductImage(req, res, next) {
  try {
    const { file } = req.files;

    if (!file.mimetype || !/^image/.test(file.mimetype))
      return next(FileIsNotImageError());

    const imagePath = createPathToImageFile(file);
    file.mv(imagePath);

    return res.json(file.name);
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

module.exports = {
  addProduct,
  updateProduct,
  getAllProducts,
  removeProduct,
  uploadProductImage,
};
