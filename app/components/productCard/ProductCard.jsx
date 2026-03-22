import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">

      {/* 🖼️ SAFE IMAGE */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain bg-gray-100 rounded-lg"
      />

      {/* 📦 CONTENT */}
      <h2 className="mt-3 font-semibold text-sm">
        {product.title}
      </h2>

      <p className="text-gray-500 text-sm">
        {product.category}
      </p>

      {/* ⭐ Rating FIX */}
      <p className="text-yellow-500 text-sm">
        ⭐ {typeof product.rating === "object"
          ? product.rating.rate
          : product.rating}
      </p>

      {/* 💰 Price */}
      <p className="text-lg font-bold">
        ${product.price}
      </p>

      {/* 🔘 BUTTON */}
      <Link href={`/products/${product.id}`}>
        <button className="mt-3 w-full bg-black text-white py-2 rounded">
          View
        </button>
      </Link>

    </div>
  );
}