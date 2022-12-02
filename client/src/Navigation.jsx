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
    const navLinksSignedIn = [
      {
        name: `Sign Out`,
        path: `/`,
        onClick: () => {
          setUser(null);
          setCartItems(null);
        },
      },
      { name: `Home`, path: `/` },
      { name: `Cart`, path: `/cart` },
    ];

    const navLinksSignedOut = [
      { name: `Sign in`, path: `/auth` },
      { name: `Home`, path: `/` },
      { name: `Cart`, path: `/cart` },
    ];

    const navLinks = user ? navLinksSignedIn : navLinksSignedOut;

    setNavLinks(navLinks);
  }, [user]);

  return (
    <div className="flex flex-wrap min-h-[100vh] justify-center content-start font-raj font-bold text-lg">
      <Header links={navLinks} />

      <div className="content-area flex grow justify-center lg:max-w-8xl ">
        <Outlet />
      </div>
    </div>
  );
}
