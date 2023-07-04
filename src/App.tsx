import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
