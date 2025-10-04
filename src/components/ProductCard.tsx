import { useCart } from "../context/CartContext";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image?: string;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("product added",product.name);
    addToCart({ productId: product.id, name: product.name, price: product.price });
  };

  return (
    <div className="relative flex flex-col w-full overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1">
      
    
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}

     
      <div className="flex flex-col gap-2 p-4">
        <div className="text-xs uppercase tracking-wide text-gray-500">
          {product.category}
        </div>
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>

        
        <div className="flex justify-between items-center mt-auto pt-2">
          <div className="text-lg font-bold text-red-700">
            ₹{product.price.toFixed(2)}
          </div>
          <button
            className="bg-yellow-300 border border-yellow-400 px-3 py-1 rounded text-sm font-medium hover:bg-yellow-400 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
