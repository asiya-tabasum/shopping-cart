import { useState } from "react";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";
import { products as productData } from "../assets/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  searchQuery?: string;
}

const PRODUCTS_PER_PAGE = 6;

export default function Products({ searchQuery = "" }: Props) {
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts =
    searchQuery.trim() === ""
      ? productData
      : productData.filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl mb-2 text-red-600 font-semibold">
            Error Loading Products
          </h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-6xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-4xl mb-2 text-gray-900 font-bold">Our Products</h1>
          <p className="text-lg text-gray-700">
            Discover amazing products at great prices
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No products found.
            </p>
          )}
        </div>

       
        <div className="flex justify-center gap-2 my-6">
         <button
            className="flex items-center px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
        >
            <ChevronLeft className="w-4 h-4" />
            Prev
        </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
           <button
            className="flex items-center px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
        >
            Next
            <ChevronRight className="w-4 h-4" />
        </button>
        </div>
      </div>
    </div>
  );
}
