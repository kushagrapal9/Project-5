import useFetch from "../hooks/useFetch";

function ProductList() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Loading...</h1>
      </div>
      
    // );delay(3000);
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-red-500 text-3xl font-bold">
          Error: {error}
        </h1>
      </div>
    // );delay(3000);
    );
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-white text-3xl text-center mb-8 font-bold">
        Photos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
  <div key={item.id} className="bg-gray-900 p-4 rounded">
    <img
      src={item.images?.[0]}
      alt={item.title}
      className="w-full h-48 object-contain"
    />
    <h2 className="text-white mt-2" >{item.title}</h2>
       <p className="text-gray-400 line-clamp-1">${item.description}</p>
       <p className="text-green-400 w-full text-right">${item.price}</p>

    
  </div>
))}
        
      </div>
    </div>
  );
}


export default ProductList;