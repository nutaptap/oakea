import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import { Navbar } from "./components/Navbar";
import { FavoritesContextProvider } from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesContextProvider>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </FavoritesContextProvider>
  );
}

export default App;
