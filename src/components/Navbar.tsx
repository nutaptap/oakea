import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-b border-stone-200 flex items-center justify-center font-sans font-medium text-stone-700 mb-16">
      <div className="flex justify-between items-center p-4 px-28 w-screen max-w-7xl">
        <ul className="flex gap-6">
          <li>
            <Link to={"/"} className="hover:text-black">
              SHOP
            </Link>
          </li>
          <li>
            <Link to={"/favorites"} className="hover:text-black">
              FAVORITES
            </Link>
          </li>
        </ul>
        <h1 className="tracking-wider text-2xl mr-32">OAKEA</h1>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 16 16"
            style={{
              stroke: "currentColor",
              strokeWidth: 0.8,
              fill: "currentColor",
            }}
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
