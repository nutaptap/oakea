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
      <h1>Favorites</h1>
      {favoritesItems.map((item) => {
        const url = shopProducts.find((product) => product.id === item.id)
          ?.images[0];
        return (
          <div key={item.id} className="flex items-center my-10 gap-3">
            <div
              className="w-[80px] h-[110px] bg-cover bg-center"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
            <h1>{item.name}</h1>
            <button
              onClick={() => handleFavoritesClick(item.id, item.name)}
              className="border border-stone-200 w-8 h-8 rounded-full text-center pb-0.5"
            >
              x
            </button>
          </div>
        );
      })}
    </main>
  );
}

export default Favorites;
