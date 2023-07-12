import { ReactNode, createContext, useState } from "react";

type ShoppingCartItemType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContextType = {
  cartItems: ShoppingCartItemType[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (
    id: number,
    quantity: number,
    name: string,
    price: number
  ) => void;
  removeFromCart: (id: number) => void;
  getTotal: () => number;
};

export const ShoppingCartContext = createContext<
  ShoppingCartContextType | undefined
>(undefined);

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<ShoppingCartItemType[]>([
    {
      id: 1,
      name: "Taza de Café 30cl",
      quantity: 3,
      price: 7.95,
    },
    {
      id: 2,
      name: "Sofá Cama de 3 Plazas",
      quantity: 1,
      price: 279.95,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (
    id: number,
    quantity: number,
    name: string,
    price: number
  ) => {
    const cartItemIndex = cartItems.findIndex((item) => item.id === id);
    if (quantity === 0) {
      return null;
    }
    if (cartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[cartItemIndex] = {
        ...updatedCartItems[cartItemIndex],
        quantity: quantity,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems((currentCartItems) => [
        ...currentCartItems,
        { id: id, name: name, quantity: quantity, price: price },
      ]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((currentCartItems) => {
      return currentCartItems.filter((item) => item.id !== id);
    });
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        toggleCart,
        addToCart,
        removeFromCart,
        getTotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
