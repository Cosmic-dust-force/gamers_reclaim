import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const logo = require("./img/logo.png")

function Header({ links = [] }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex grow basis-full items-center justify-between px-4 py-8 border-gray-400">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="object-scale-down w-12  rounded-md"
        />
      </a>
      <h1 className="font-bebas text-center font-semibold text-3xl uppercase tracking-wide m-3">Gamer's Reclaim
      </h1>
      <nav>
        <section className="flex MOBILE-MENU lg:hidden">
          <button
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </button>

          <div className={isNavOpen ? `showMenuNav` : `hideMenuNav`}>
            <button
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {links.map((link, index) => {
                const { name, path } = link;

                const handleClick = () => {
                  if (link.onClick) link.onClick();
                  setIsNavOpen(false);
                };

                return (
                  <li
                    key={index}
                    className="my-8 uppercase border-b border-gray-400"
                  >
                    <Link onClick={handleClick} to={path}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 DESKTOP-MENU lg:flex">
          {links.map((link, index) => {
            const { name, path } = link;

            const handleClick = () => {
              if (link.onClick) link.onClick();
              setIsNavOpen(false);
            };

            return (
              <li key={index}>
                <Link onClick={handleClick} to={path}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default Header;
