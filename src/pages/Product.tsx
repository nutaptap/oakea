import { Link, useParams } from "react-router-dom";
import shopProducts from "../data/products.json";
import { useState } from "react";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
}

function Product() {
  const { id } = useParams();
  const product = shopProducts.find(
    (product: Product) => product.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    product?.images[0]
  );

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const favoritesContext = useContext(FavoritesContext);

  const handleFavoritesClick = () => {
    if (favoritesContext) {
      const { handleFavoritesClick } = favoritesContext;
      handleFavoritesClick(product?.id || 0, product?.name || "");
    }
  };

  const isFavorite = favoritesContext?.favoritesItems.some(
    (item) => item.id === product?.id
  );

  return (
    <main className="flex flex-col justify-center items-center">
      <span>
        <Link to={"/"}>Shop</Link> / {product?.name}
      </span>
      <div className="mt-20 flex gap-10">
        <div>
          <div
            className="w-[400px] h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${selectedImage})` }}
          ></div>
          <div className="flex justify-between mt-4">
            {product?.images.map((image, index) => (
              <div
                key={index}
                className="w-[80px] h-[110px] bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => handleImageClick(image)}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2>{product?.name}</h2>
          <svg
            onClick={handleFavoritesClick}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isFavorite ? "#000000" : "none"}
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span className="border-y border-stone-200 py-5">
            € {product?.price}
          </span>
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-0">
              <button
                className="border border-stone-200 w-8 h-8 m-0"
                type="button"
              >
                -
              </button>
              <p className="border-t border-b border-stone-200 w-9 h-8 m-0 flex items-center justify-center">
                1
              </p>
              <button
                className="border border-stone-200 w-8 h-8 m-0 bg-stone-200"
                type="button"
              >
                +
              </button>
            </span>
            <button className="border border-stone-200 p-3">Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
