import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
