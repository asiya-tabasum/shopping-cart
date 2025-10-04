import {  Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Header from "./components/Header";
import CartPage from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/home" element={<Header />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Header />} />
        </Routes>
    </CartProvider>
  );
}

export default App;
