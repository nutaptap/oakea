import shopProducts from "../data/products.json";
import ProductLink from "../components/ProductLink";

export default function Shop() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex items-center px-28 w-screen max-w-7xl">
        <h1>Shop</h1>
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
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div className="mt-20 grid gap-16 max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {shopProducts.map((product) => {
          return <ProductLink {...product} key={product.id} />;
        })}
      </div>
    </main>
  );
}
