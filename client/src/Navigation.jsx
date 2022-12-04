import { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";

import Header from "./Header";

export default function Navigation() {
  const [navLinks, setNavLinks] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const { setCartItems } = useContext(CartContext);

  useEffect(() => {
    const PRODUCT_LINK = { name: `Products`, path: `/products` };
    const SIGN_OUT = {
      name: `Sign Out`,
      path: `/`,
      onClick: () => {
        setUser(null);
        setCartItems(null);
      },
    };
    const ABOUT_US = { name: `About Us`, path: `/` };

    const navLinksSignedInUser = [
      SIGN_OUT,
      PRODUCT_LINK,
      ABOUT_US,
      { name: `Cart`, path: `/cart` },
    ];

    const navLinksSignedInAdmin = [
      SIGN_OUT,
      PRODUCT_LINK,
      ABOUT_US,
      { name: `Customers`, path: `/admin/customers` },
    ];

    const navLinksSignedOut = [
      { name: `Sign in`, path: `/auth` },
      PRODUCT_LINK,
      ABOUT_US,
      { name: `Cart`, path: `/cart` },
    ];

    function getNavigationLinksForContext(role) {
      let navLinks = [];

      switch (role) {
        case "customer":
          navLinks = navLinksSignedInUser;
          break;

        case "guest":
          navLinks = navLinksSignedInUser;
          break;

        case "admin":
          navLinks = navLinksSignedInAdmin;
          break;

        default:
          navLinks = navLinksSignedOut;
          break;
      }

      return navLinks;
    }

    const navLinks = getNavigationLinksForContext(user?.user.userRole);

    setNavLinks(navLinks);
  }, [user, setUser, setCartItems]);

  return (
    <div className="flex flex-wrap min-h-[100vh] justify-center content-start font-raj bg-white font-bold text-lg">
      <Header links={navLinks} />

      <div className="content-area flex grow justify-center lg:max-w-8xl ">
        <Outlet />
      </div>
    </div>
  );
}
