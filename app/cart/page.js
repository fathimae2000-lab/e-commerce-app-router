"use client";

import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const increaseQty = (id) => {
    updateQuantity(id, 1); // add 1
  };

  const decreaseQty = (id) => {
    updateQuantity(id, -1); // subtract 1
  };

  const removeItem = (id) => {
    // You need to define removeFromCart in context
    removeFromCart(id);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p className="text-gray-500">Your cart is empty 🛒</p>;
  }

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl"
            >
              <img src={item.image} className="w-20 h-20 rounded-lg" />
              <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Total</span>
            <span className="font-bold">${total}</span>
          </div>
          <button className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}