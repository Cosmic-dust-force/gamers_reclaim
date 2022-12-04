import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { StateContext } from "./context/StateContext";
import Navigation from "./Navigation";
import Home from "./routes/Home";
import { Loading } from "./components";
import Login from "./routes/auth/Login";
import Register from "./routes/auth/Register";
import UserAuthentication from "./routes/auth/UserAuthentication";
import ProductDetails from "./routes/ProductDetails";
import Products from "./routes/products/Products";
import Cart from "./routes/checkout/Cart";
import OrderProcessedPage from "./routes/checkout/OrderProcessedPage";
import EditProductPage from "./routes/admin/EditProductPage";
import CreateGuest from "./routes/auth/CreateGuest";
import CustomersList from "./routes/admin/CustomersList";
import CustomerDetails from "./routes/admin/CustomerDetails";
import ProductsList from "./routes/products/ProductsList";
import ProductsNav from "./routes/products/ProductsNav";
import CreateProductForm from "./routes/admin/CreateProductForm";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const { isLoading } = useContext(StateContext);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="/auth" element={<UserAuthentication />}>
            <Route index={true} element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/createguest" element={<CreateGuest />} />
          </Route>
          <Route path="/products" element={<ProductsNav />}>
            <Route index={true} element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route
              path="/products/:productId/admin"
              element={<EditProductPage />}
            />
            <Route path="/products/create" element={<CreateProductForm />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/orderprocessed" element={<OrderProcessedPage />} />
          <Route path="/admin/customers" element={<CustomersList />} />
          <Route
            path="/admin/customers/:customerId"
            element={<CustomerDetails />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
