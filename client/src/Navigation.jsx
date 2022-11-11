import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

export default function Navigation() {
  const navigate = useNavigate();
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    //Check if user in cache and switch links accordingly.

    const navLinksSignedIn = [
      { name: `Sign Out`, path: `/` },
      { name: `Link1`, path: `/link1` },
      { name: `Link2`, path: `/link2` },
    ];

    const navLinksSignedOut = [
      { name: `Sign in`, path: `/auth` },
      { name: `Link1`, path: `/link1` },
      { name: `Link2`, path: `/link2` },
    ];

    setNavLinks(navLinksSignedOut);
  }, [navigate]);

  return (
    <div className="flex flex-wrap min-h-[100vh] justify-center content-start bg-gray-400">
      <Header links={navLinks} />

      <div className="content-area flex grow justify-center lg:max-w-4xl ">
        <Outlet />
      </div>
    </div>
  );
}
