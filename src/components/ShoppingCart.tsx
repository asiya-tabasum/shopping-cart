import React from "react";
import CartIcon from "../assets/shopping-cart.svg"; 

interface CartProps {
  count: number;
  onClick: () => void;
}

const ShoppingCart: React.FC<CartProps> = ({ count, onClick }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
     
      <img
        src={CartIcon}
        alt="shopping-cart-icon"
        className="h-8 w-8 invert"
      />

   
      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 bg-red-600 text-white text-xs font-bold rounded-full border-2 border-white">
          {count}
        </span>
      )}
    </div>
  );
};

export default ShoppingCart;
