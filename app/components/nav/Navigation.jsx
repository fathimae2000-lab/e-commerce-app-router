"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cart } = useCart(); // now safe to use

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-black tracking-wide cursor-pointer">
            🛍️ Shopsy
          </h1>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <button className="relative bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Cart
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {cart.length} {/* ✅ Shows real cart count */}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}