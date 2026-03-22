"use client";

import { useParams } from "next/navigation";
import { products } from "../../../lib/products";
import {useCart} from '../../context/CartContext'
export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);

  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-2xl font-semibold text-gray-600">
        Product not found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-5xl w-full grid md:grid-cols-2 gap-8 p-8">

        {/* Image Section */}
        <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-6">
          <img
            src={product.image}
            className="h-[300px] object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between space-y-6">

          <div>
            <h1 className="text-3xl font-bold text-gray-800 leading-snug">
              {product.title}
            </h1>

            <p className="text-yellow-500 text-lg mt-2">
              ⭐ {product.rating?.rate}
            </p>

            <p className="text-3xl font-bold text-green-600 mt-4">
              ${product.price}
            </p>

            {/* ✅ Description */}
            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Button */}
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold 
            hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg"
          >
            🛒 Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}