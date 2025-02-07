import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Product } from "../types/database";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContexts"
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      console.error("Error fetching products:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">Welcome to EasyShop</h1>
            <p className="text-xl mb-8">Your one-stop destination for managing products online</p>
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Products</h2>
          
          {loading ? (
            <p className="text-center text-gray-500">Loading products...</p>
          ) : products.length === 0 ? (
            <p className="text-center text-gray-500">No products available.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShoppingBag className="h-12 w-12 text-indigo-600" />}
              title="Easy Product Management"
              description="Add, update, and delete your products with just a few clicks"
            />
            <FeatureCard
              icon={<ShoppingBag className="h-12 w-12 text-indigo-600" />}
              title="Secure Platform"
              description="Your data is protected with industry-standard security measures"
            />
            <FeatureCard
              icon={<ShoppingBag className="h-12 w-12 text-indigo-600" />}
              title="Real-time Updates"
              description="See changes to your products instantly across all devices"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 EasyShop, All Rights Reserved</p>
          <div className="mt-4">
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link> | 
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
          <div className="mt-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white mx-2">Facebook</a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-2">Twitter</a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white mx-2">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart(); // Cart context se function le lo

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {product.image_url && (
        <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <p className="text-lg font-bold text-indigo-600 mt-2">${product.price.toFixed(2)}</p>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

// Product Card Component
// function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       {product.image_url && (
//         <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover" />
//       )}
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//         <p className="text-gray-600 mt-1">{product.description}</p>
//         <p className="text-lg font-bold text-indigo-600 mt-2">${product.price.toFixed(2)}</p>
//         <div className="mt-4">
//           <Link to={`/product/${product.id}`} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
//           Add to Cart
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
// export default ProductCard;
