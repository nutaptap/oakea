import { ReactNode, createContext, useState } from "react";

type FavoriteItem = {
  id: number;
  name: string;
};

type FavoritesProviderProps = {
  children: ReactNode;
};

type FavoritesContextType = {
  favoritesItems: FavoriteItem[];
  handleFavoritesClick: (id: number, name: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesContextProvider({ children }: FavoritesProviderProps) {
  const [favoritesItems, setFavoritesItems] = useState<FavoriteItem[]>([]);

  function handleFavoritesClick(id: number, name: string) {
    setFavoritesItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) === undefined) {
        return [...currentItems, { id, name }];
      } else {
        return currentItems.filter((item) => item.id !== id);
      }
    });
  }

  return (
    <FavoritesContext.Provider value={{ favoritesItems, handleFavoritesClick }}>
      {children}
    </FavoritesContext.Provider>
  );
}
