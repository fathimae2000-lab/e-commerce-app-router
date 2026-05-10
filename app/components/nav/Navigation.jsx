"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(10, 10, 18, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
          font-family: 'DM Sans', sans-serif;
        }

        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #f5f0e8;
          text-decoration: none;
          letter-spacing: 0.03em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.2s;
        }

        .navbar-logo span {
          color: #d4af37;
        }

        .navbar-logo:hover {
          color: #d4af37;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .navbar-links a {
          color: rgba(245, 240, 232, 0.65);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s;
          position: relative;
        }

        .navbar-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #d4af37;
          transition: width 0.3s ease;
        }

        .navbar-links a:hover {
          color: #d4af37;
        }

        .navbar-links a:hover::after {
          width: 100%;
        }

        .cart-btn {
          position: relative;
          background: linear-gradient(135deg, #d4af37, #b8962e);
          color: #0a0a12;
          border: none;
          padding: 0.55rem 1.4rem;
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.25);
        }

        .cart-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(212, 175, 55, 0.4);
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #e53e3e;
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          min-width: 18px;
          height: 18px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          border: 2px solid #0a0a12;
        }

        @media (max-width: 768px) {
          .navbar-links { display: none; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
             Shop<span>sy</span>
          </Link>

          <div className="navbar-links">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <Link href="/cart">
              <button className="cart-btn">
                Cart
                <span className="cart-badge">{cart.length}</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}