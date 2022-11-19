import { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Header from "./Header";

export default function Navigation() {
  const [navLinks, setNavLinks] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const navLinksSignedIn = [
      {
        name: `Sign Out`,
        path: `/`,
        onClick: () => {
          setUser(null);
        },
      },
      { name: `Home`, path: `/` },
      { name: `Link2`, path: `/link2` },
    ];

    const navLinksSignedOut = [
      { name: `Sign in`, path: `/auth` },
      { name: `Home`, path: `/` },
      { name: `Link2`, path: `/link2` },
    ];

    const navLinks = user ? navLinksSignedIn : navLinksSignedOut;

    setNavLinks(navLinks);
  }, [user]);

  return (
    <div className="flex flex-wrap min-h-[100vh] justify-center content-start bg-gray-400">
      <Header links={navLinks} />

      <div className="content-area flex grow justify-center lg:max-w-8xl ">
        <Outlet />
      </div>
    </div>
  );
}
