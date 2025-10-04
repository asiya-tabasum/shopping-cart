import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import { useCart } from "../context/CartContext";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="flex flex-col h-screen">
      <div className="sticky top-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b-2 border-amber-500 shadow-md backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4 gap-4 flex-nowrap">
          
        
          <div>
            <h1
              className="text-2xl md:text-3xl font-bold text-amber-500 tracking-tight cursor-pointer drop-shadow-md transition-transform duration-300 hover:text-amber-400 hover:scale-105"
              onClick={() => navigate("/home")}
            >
              Prodify
            </h1>
          </div>

         
          <div className="flex-1 max-w-xl md:max-w-2xl w-full">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex relative bg-white rounded-lg shadow-md overflow-hidden focus-within:shadow-xl focus-within:-translate-y-[1px] transition-all duration-300"
            >
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 text-gray-800 text-base outline-none bg-white placeholder-gray-400 placeholder:italic focus:bg-gray-100"
              />
            </form>
          </div>

         
          <div>
            <h2
              className="text-white text-lg md:text-xl font-bold cursor-pointer hover:underline"
              onClick={() => navigate("/home")}
            >
              Products
            </h2>
          </div>

         
          <div>
            <ShoppingCart count={cartCount} onClick={() => navigate("/cart")} />
          </div>

        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Products searchQuery={searchQuery} />
      </div>

    </header>
  );
};

export default Header;
