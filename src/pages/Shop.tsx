import shopProducts from "../data/products.json";
import ProductLink from "../components/ProductLink";

export default function Shop() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1>Store</h1>
      <div className="mt-20 flex flex-wrap justify-center gap-16 max-w-7xl">
        {shopProducts.map((product) => {
          return <ProductLink {...product} key={product.id} />;
        })}
      </div>
    </main>
  );
}
