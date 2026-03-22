import Link from "next/link";

export default function Hero() {
  return (
    <div className="space-y-16">

      {/* 🔥 Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white rounded-3xl p-12 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Shopsy 🛍️
        </h1>

        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          Discover the latest trends, premium products, and unbeatable prices — all in one place.
        </p>

        <Link href="/products">
          <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition transform hover:scale-105">
            Shop Now
          </button>
        </Link>
      </div>

      {/* ⭐ Features Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center">

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🚚 Fast Delivery</h2>
          <p className="text-gray-500 text-sm">
            Get your products delivered quickly and safely to your doorstep.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">💰 Best Prices</h2>
          <p className="text-gray-500 text-sm">
            Enjoy affordable pricing with top-quality products.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">⭐ Top Quality</h2>
          <p className="text-gray-500 text-sm">
            Carefully selected products to ensure the best experience.
          </p>
        </div>

      </div>

      {/* 🛍️ CTA Section */}
      <div className="bg-gray-100 rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Start Shopping Today!
        </h2>

        <p className="text-gray-600 mb-6">
          Explore our wide range of products and find what you love.
        </p>

        <Link href="/products">
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Browse Products
          </button>
        </Link>
      </div>

    </div>
  );
}