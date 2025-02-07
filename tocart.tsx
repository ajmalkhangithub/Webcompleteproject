import { createContext, useState, useContext, ReactNode } from "react";

// Define Product Type
interface Product {
  id: number;
  name: string;
  price: number;
}

// Define Cart Context Type
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Provider Component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add to Cart Function
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
