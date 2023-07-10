import { Link } from "react-router-dom";

import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

type ProductLinkProps = {
  id: number;
  name: string;
  price: number;
  images: string[];
};

export default function ProductLink({
  id,
  name,
  price,
  images,
}: ProductLinkProps) {
  const favoritesContext = useContext(FavoritesContext);
  const isFavorite = favoritesContext?.favoritesItems.some(
    (item) => item.id === id
  );
  const handleFavoritesClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (favoritesContext) {
      const { handleFavoritesClick } = favoritesContext;
      handleFavoritesClick(id, name);
    }
  };

  return (
    <Link to={`/product/${id}`} className="m-6">
      <div
        className="w-60 h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[0]})` }}
      ></div>
      <div className="flex justify-between my-3">
        <p>{name}</p>
        <svg
          onClick={handleFavoritesClick}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={isFavorite ? "#000000" : "none"}
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <p>€ {price}</p>
    </Link>
  );
}
