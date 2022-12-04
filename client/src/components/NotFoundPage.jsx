import { Link } from "react-router-dom";
const emptyCartImage = require("../img/empty_cart.png");

export default function NotFoundPage() {
  return (
    <main className="p-6 flex flex-col items-center">
      <h1 className="mt-3 text-5xl text-center text-semibold">
        Sorry, page not found!
      </h1>
      <img src={emptyCartImage} alt="handheld videogame console" />
      <Link
        to="/"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Go Home
      </Link>
    </main>
  );
}
