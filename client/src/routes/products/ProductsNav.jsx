import { Outlet } from "react-router-dom";

export default function ProductsNav() {
  return (
    <div>
      {/* <ProductsList products={products} /> */}
      <Outlet />
    </div>
  );
}
