import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
  uploadProductImage,
} from "../../axios-services/products";
import { LinkButton, PrimaryButton, TextBox } from "../../components";
import FileUpload from "../../components/FileUpload";
import { UserContext } from "../../context/UserContext";
import useCategories from "../../hooks/useCategories";

export default function CreateProductForm() {
  const navigate = useNavigate();
  const { categories } = useCategories();
  const { user } = useContext(UserContext);

  const [productName, setProductName] = useState("");
  const [priceUsd, setPriceUsd] = useState("");
  const [inventoryQuantity, setInventoryQuantity] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setCategoryId(categories[0]?.id);
  }, [categories]);

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    createProduct(
      user?.token,
      productName,
      priceUsd,
      inventoryQuantity,
      categoryId,
      description,
      brand,
      imageUrl
    );

    navigate("/products");
  };

  const handleProductNameChanged = (event) => {
    const enteredProductName = event.target.value;
    setProductName(enteredProductName);
  };

  const handlePriceUsdChanged = (event) => {
    const enteredPriceUsd = event.target.value;
    setPriceUsd(enteredPriceUsd);
  };

  const handleInventoryQuantityChanged = (event) => {
    const enteredInventoryQuantity = event.target.value;
    setInventoryQuantity(enteredInventoryQuantity);
  };

  const handleCategoryIdChanged = (event) => {
    const enteredCategoryId = event.target.value;
    setCategoryId(enteredCategoryId);
  };

  const handleDescriptionChanged = (event) => {
    const enteredDescription = event.target.value;
    setDescription(enteredDescription);
  };

  const handleBrandChanged = (event) => {
    const enteredBrand = event.target.value;
    setBrand(enteredBrand);
  };

  const handleFileUpload = async (file) => {
    const uploadedImageUrl = await uploadProductImage(user?.token, file);
    setImageUrl(uploadedImageUrl);
  };

  const handleCancelButtonClick = () => {
    navigate("/products");
  };

  return (
    <div className="grow flex flex-col pt-12 px-6 mb-6">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"add product"}
      </h2>
      <div className="flex flex-col items-start mb-6">
        <h3 className="mb-3">Upload Product Image:</h3>
        <FileUpload onSubmitClickedHandler={handleFileUpload} />
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <TextBox
            onChange={handleProductNameChanged}
            placeholder={"Product Name"}
            value={productName}
            required={true}
          />

          <TextBox
            onChange={handlePriceUsdChanged}
            placeholder={"Price"}
            value={priceUsd}
            required={true}
          />

          <TextBox
            onChange={handleInventoryQuantityChanged}
            placeholder={"Inventory Quantity"}
            value={inventoryQuantity}
            required={true}
          />

          <label>Select Category:</label>
          <select
            onChange={handleCategoryIdChanged}
            required={true}
            className="p-2 border-2 border-gray-700 rounded-md bg-gray-100 text-sm font-semibold text-gray-900"
          >
            {categories.map((category) => {
              return (
                <React.Fragment key={category.id}>
                  <option value={category.id}>{category.categoryName}</option>
                </React.Fragment>
              );
            })}
          </select>

          <textarea
            onChange={handleDescriptionChanged}
            placeholder={"Product Description"}
            value={description}
            required={true}
            className="p-3 border-2 border-gray-700 rounded-md bg-gray-100 text-sm font-semibold text-gray-900"
          />

          <TextBox
            onChange={handleBrandChanged}
            placeholder={"Product Brand"}
            value={brand}
            required={true}
          />

          <PrimaryButton value={"Submit"} />
        </form>
      </div>
      <LinkButton value={"Cancel"} clickHandler={handleCancelButtonClick} />
    </div>
  );
}
