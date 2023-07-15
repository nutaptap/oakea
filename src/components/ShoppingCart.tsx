import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import shopProducts from "../data/products.json";

export function ShoppingCart() {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    return <h1>Shopping Cart</h1>;
  }

  const { cartItems, toggleCart, removeFromCart, getTotal } = context;

  return (
    <>
      <div className="fixed top-0 right-0 h-screen bg-white w-[500px] border-t border-l border-stone-200 z-10">
        <div className="border-t border-b p-6 flex justify-between items-center mb-6">
          <h2>Shopping cart</h2>
          <button onClick={toggleCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
        <div className="flex flex-col gap-6 ml-6 overflow-y-scroll max-h-[900px]">
          {cartItems.map((item) => {
            const url = shopProducts.find((product) => product.id === item.id)
              ?.images[0];
            const price = shopProducts.find(
              (product) => product.id === item.id
            )?.price;
            return (
              <div key={item.id} className="flex gap-4 items-center">
                <div
                  className="w-[80px] h-[100px] bg-cover bg-center rounded-md"
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
                <p className="w-[170px]">{item.name}</p>
                <p className="w-[80px]">€ {price}</p>
                <p className="w-[30px]">x{item.quantity}</p>
                <button
                  className="border border-stone-200 w-8 h-8 rounded-full flex items-center justify-center"
                  onClick={() => removeFromCart(item.id)}
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
        <div className="flex flex-col gap-4 fixed bottom-0 w-[500px] border-t border-b p-6 flex justify-between items-center bg-white">
          <p className="text-sm text-stone-600">
            Shipping will be calculated during checkout
          </p>
          <button className="border border-stone-800 text-white bg-stone-800 p-4 w-[300px] text-sm">
            CHECKOUT · € {getTotal()}
          </button>
        </div>
      </div>
      <div className="fixed top-0 right-0 bg-stone-800 w-screen h-screen opacity-10 "></div>
    </>
  );
}
