import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { ShoppingCart } from "./ShoppingCart";

export function Navbar() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    return null;
  }
  const { isCartOpen, toggleCart, calculateTotalItems } = context;

  return (
    <>
      <nav className="border-b border-stone-200 flex items-center justify-center font-sans text-stone-700 mb-16">
        <div className="flex justify-between items-center p-4 px-28 w-screen max-w-7xl">
          <ul className="flex gap-6 text-sm tracking-wide">
            <li>
              <Link
                to={"/"}
                className="hover:text-black hover:font-semibold transition-all duration-200"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to={"/favorites"}
                className="hover:text-black hover:font-semibold transition-all duration-200"
              >
                FAVORITES
              </Link>
            </li>
          </ul>
          <h1 className="tracking-wider text-2xl mr-32 hidden md:block">
            OAKEA
          </h1>
          <button onClick={toggleCart} className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
            <div className="text-sm bg-white border border-stone-800 rounded-full absolute -top-3 -right-4 w-6 h-6 flex items-center justify-center">
              {calculateTotalItems()}
            </div>
          </button>
        </div>
      </nav>
      {isCartOpen && <ShoppingCart />}
    </>
  );
}
