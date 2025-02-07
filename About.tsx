import React from 'react';
import { ShoppingBag, Truck, CreditCard, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">About EasyShop</h1>
            <p className="text-xl">Your one-stop destination for all your shopping needs. We bring together quality products, reliable sellers, and a seamless shopping experience.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="flex justify-center">
                <ShoppingBag className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Wide Selection</h3>
              <p className="mt-2 text-base text-gray-500">
                Browse through thousands of products across multiple categories
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Truck className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Fast Delivery</h3>
              <p className="mt-2 text-base text-gray-500">
                Quick and reliable shipping to your doorstep
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <CreditCard className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Secure Payments</h3>
              <p className="mt-2 text-base text-gray-500">
                Safe and encrypted payment processing
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <HeartHandshake className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Customer Support</h3>
              <p className="mt-2 text-base text-gray-500">
                24/7 dedicated support for all your queries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">See EasyShop in Action</h2>
            <p className="mt-4 text-xl text-gray-500">Watch how easy it is to shop with us</p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[600px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="EasyShop Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              At EasyShop, we're committed to revolutionizing the online shopping experience. 
              Our platform connects buyers with trusted sellers, ensuring quality products 
              and exceptional service every time you shop with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;  // Default export
