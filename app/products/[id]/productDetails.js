"use client";

import { useParams } from "next/navigation";
import { products } from "../../../lib/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400&display=swap');
          .not-found {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'DM Sans', sans-serif;
            color: rgba(245,240,232,0.5);
            font-size: 1.1rem;
            background: #0a0a12;
          }
        `}</style>
        <div className="not-found">Product not found</div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .pd-root {
          min-height: 100vh;
          background: #0a0a12;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 1.5rem;
          font-family: 'DM Sans', sans-serif;
        }

        .pd-card {
          background: linear-gradient(145deg, rgba(22, 22, 36, 0.98), rgba(14, 14, 24, 0.98));
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 24px;
          max-width: 960px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }

        @media (max-width: 768px) {
          .pd-card { grid-template-columns: 1fr; }
        }

        .pd-image-side {
          background: rgba(245,240,232,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          min-height: 380px;
          position: relative;
          overflow: hidden;
        }

        .pd-image-side::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(212,175,55,0.06) 0%, transparent 70%);
        }

        .pd-image {
          max-height: 300px;
          width: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
          position: relative;
          z-index: 1;
        }

        .pd-image:hover {
          transform: scale(1.06);
        }

        .pd-info-side {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .pd-category {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d4af37;
        }

        .pd-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #f5f0e8;
          line-height: 1.3;
          margin-top: 0.5rem;
        }

        .pd-rating {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: rgba(245,240,232,0.5);
          margin-top: 0.5rem;
        }

        .pd-stars {
          color: #d4af37;
          letter-spacing: 0.05em;
        }

        .pd-divider {
          height: 1px;
          background: rgba(212,175,55,0.12);
          margin: 0.5rem 0;
        }

        .pd-price {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: #f5f0e8;
        }

        .pd-price span {
          font-size: 1rem;
          font-weight: 300;
          font-family: 'DM Sans', sans-serif;
          color: rgba(245,240,232,0.4);
          margin-left: 0.25rem;
        }

        .pd-description {
          font-size: 0.875rem;
          font-weight: 300;
          color: rgba(245,240,232,0.5);
          line-height: 1.75;
        }

        .pd-add-btn {
          width: 100%;
          background: linear-gradient(135deg, #d4af37, #b8962e);
          color: #0a0a12;
          border: none;
          padding: 1rem;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(212,175,55,0.25);
        }

        .pd-add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(212,175,55,0.4);
        }
      `}</style>

      <div className="pd-root">
        <div className="pd-card">
          <div className="pd-image-side">
            <img src={product.image} className="pd-image" alt={product.title} />
          </div>

          <div className="pd-info-side">
            <div>
              <p className="pd-category">{product.category}</p>
              <h1 className="pd-title">{product.title}</h1>
              <div className="pd-rating">
                <span className="pd-stars">★★★★★</span>
                {product.rating?.rate} rating
              </div>
            </div>

            <div className="pd-divider" />

            <div>
              <div className="pd-price">
                ${product.price}<span>USD</span>
              </div>
              <p className="pd-description" style={{ marginTop: '1rem' }}>
                {product.description}
              </p>
            </div>

            <button className="pd-add-btn" onClick={() => addToCart(product)}>
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}