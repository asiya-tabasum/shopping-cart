import { useCart } from "../context/CartContext";
import {Trash} from "lucide-react";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) return <p className="text-center mt-10">Your cart is empty.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Cart({cartItems.length})</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.productId}
            className="flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => decreaseQuantity(item.productId)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => increaseQuantity(item.productId)}
              >
                +
              </button>
             <button
            className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            onClick={() => removeFromCart(item.productId)}
            >
            <Trash className="w-4 h-4" />
            Remove
            </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold">Total: ₹{totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}
