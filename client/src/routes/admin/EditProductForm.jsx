import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProduct } from "../../axios-services/products";
import { PrimaryButton, TextBox } from "../../components";
import useCategories from "../../hooks/useCategories";

export default function EditProductForm({ product, token }) {
  const navigate = useNavigate();
  const { categories } = useCategories();

  const [editedProductName, setEditedProductName] = useState(
    product.productName
  );
  const [editedPriceUsd, setEditedPriceUsd] = useState(product.priceUsd);
  const [editedinventoryQuantity, setEditedInventoryQuantity] = useState(
    product.inventoryQuantity
  );
  const [editedCategoryId, setEditedCategoryId] = useState(product.categoryId);
  const [editedDescription, setEditedDescription] = useState(
    product.description
  );
  const [editedBrand, setEditedBrand] = useState(product.brand);

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    const updatedProduct = {
      priceUsd: editedPriceUsd,
      inventoryQuantity: editedinventoryQuantity,
      categoryId: editedCategoryId,
      description: editedDescription,
      brand: editedBrand,
    };
    if (product.productName !== editedProductName) {
      updatedProduct.productName = editedProductName;
    }
    editProduct(token, product.id, updatedProduct);
    navigate("/");
  };

  const handleProductNameChanged = (event) => {
    const enteredProductName = event.target.value;
    setEditedProductName(enteredProductName);
  };

  const handlePriceUsdChanged = (event) => {
    const enteredPriceUsd = event.target.value;
    setEditedPriceUsd(enteredPriceUsd);
  };

  const handleInventoryQuantityChanged = (event) => {
    const enteredInventoryQuantity = event.target.value;
    setEditedInventoryQuantity(enteredInventoryQuantity);
  };

  const handleCategoryIdChanged = (event) => {
    const enteredCategoryId = event.target.value;
    setEditedCategoryId(enteredCategoryId);
  };

  const handleDescriptionChanged = (event) => {
    const enteredDescription = event.target.value;
    setEditedDescription(enteredDescription);
  };

  const handleBrandChanged = (event) => {
    const enteredBrand = event.target.value;
    setEditedBrand(enteredBrand);
  };

  return (
    <div className="grow flex flex-col pt-12 px-6 ">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"edit product"}
      </h2>

      <div className="flex justify-center">
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <label>Product Name:</label>
          <TextBox
            onChange={handleProductNameChanged}
            placeholder={product.productName}
            value={editedProductName}
          />

          <label>Price:</label>
          <TextBox
            onChange={handlePriceUsdChanged}
            placeholder={product.priceUsd}
            value={editedPriceUsd}
          />

          <label>Inventory Quantity:</label>
          <TextBox
            onChange={handleInventoryQuantityChanged}
            placeholder={product.inventoryQuantity}
            value={editedinventoryQuantity}
          />

          <label>Select Category:</label>
          <select onChange={handleCategoryIdChanged}>
            {categories.map((category) => {
              return (
                <>
                  <option
                    value={category.id}
                    selected={category.id === product.categoryId}
                  >
                    {category.categoryName}
                  </option>
                </>
              );
            })}
          </select>

          <label>Description:</label>
          <textarea
            onChange={handleDescriptionChanged}
            placeholder={product.description}
            value={editedDescription}
          />

          <label>Brand:</label>
          <TextBox
            onChange={handleBrandChanged}
            placeholder={product.brand}
            value={editedBrand}
          />

          <PrimaryButton value={"Submit Changes"} />
        </form>
      </div>
    </div>
  );
}
