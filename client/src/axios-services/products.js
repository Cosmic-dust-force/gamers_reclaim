import { productsController } from "./gamers-reclaim-api";
import { handleErrors } from "./common";

async function getAll() {
  try {
    const serverResponse = await productsController.get("");

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

async function createProduct(
  token,
  productName,
  priceUsd,
  inventoryQuantity,
  categoryId,
  description,
  brand,
  imageUrl
) {
  try {
    const serverResponse = await productsController.post(
      "",
      {
        productName,
        priceUsd,
        inventoryQuantity,
        categoryId,
        description,
        brand,
        imageUrl,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

async function deleteProduct(token, productId) {
  try {
    const serverResponse = await productsController.delete(`/${productId}`, {
      headers: { authorization: `Bearer ${token}` },
    });

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

async function editProduct(token, productId, updatedProduct) {
  try {
    const serverResponse = await productsController.patch(
      `/${productId}`,
      updatedProduct,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

async function uploadProductImage(token, file) {
  try {
    let formData = new FormData();
    formData.append("file", file);

    const serverResponse = await productsController.post(
      "/productImage",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      }
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export {
  getAll,
  uploadProductImage,
  createProduct,
  deleteProduct,
  editProduct,
};
