import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import shopProducts from "../data/products.json";

function Favorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    return <h1>Favorites</h1>;
  }

  const { favoritesItems, handleFavoritesClick } = context;

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex items-center px-28 w-screen max-w-7xl">
        <h1>Favorites</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div className="mt-20 flex flex-col items-start justify-between gap-10">
        {favoritesItems.map((item) => {
          const url = shopProducts.find((product) => product.id === item.id)
            ?.images[0];
          return (
            <div key={item.id} className="flex items-center gap-8">
              <div
                className="w-[80px] h-[110px] bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
              <h1>{item.name}</h1>
              <button
                className="border border-stone-200 w-8 h-8 rounded-full flex items-center justify-center"
                onClick={() => handleFavoritesClick(item.id, item.name)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Favorites;
