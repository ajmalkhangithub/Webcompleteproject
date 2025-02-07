import { useCart } from "../contexts/CartContexts";

function CartPage() {
  const { cart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="mt-4">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="border-b py-2">
              <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover inline-block" />
              <span className="ml-4">{item.name} - ${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
