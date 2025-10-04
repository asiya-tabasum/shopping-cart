export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="text-center">
       
        <div
          className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-3"
        ></div>

       
        <p className="text-base text-gray-700">Loading products...</p>
      </div>
    </div>
  );
}
