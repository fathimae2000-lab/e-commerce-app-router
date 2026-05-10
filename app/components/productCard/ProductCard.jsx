import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400;500&display=swap');

        .product-card {
          background: linear-gradient(145deg, rgba(26, 26, 40, 0.9), rgba(18, 18, 30, 0.95));
          border: 1px solid rgba(212, 175, 55, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.25);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .product-card-image-wrap {
          background: rgba(245, 240, 232, 0.04);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .product-card-image-wrap::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(to top, rgba(18, 18, 30, 0.95), transparent);
        }

        .product-card-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
          mix-blend-mode: luminosity;
          filter: brightness(0.95);
        }

        .product-card:hover .product-card-image {
          transform: scale(1.08);
          mix-blend-mode: normal;
          filter: brightness(1);
        }

        .product-card-body {
          padding: 1.25rem 1.25rem 1.5rem;
        }

        .product-card-category {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 0.4rem;
        }

        .product-card-title {
          font-size: 0.875rem;
          font-weight: 400;
          color: rgba(245, 240, 232, 0.9);
          line-height: 1.45;
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .product-card-rating {
          font-size: 0.78rem;
          color: rgba(245, 240, 232, 0.45);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .product-card-rating .star {
          color: #d4af37;
        }

        .product-card-price {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #f5f0e8;
        }

        .product-card-btn {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: #d4af37;
          padding: 0.65rem;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s, color 0.25s, border-color 0.25s;
        }

        .product-card-btn:hover {
          background: linear-gradient(135deg, #d4af37, #b8962e);
          color: #0a0a12;
          border-color: transparent;
        }
      `}</style>

      <div className="product-card">
        <div className="product-card-image-wrap">
          <img
            src={product.image}
            alt={product.title}
            className="product-card-image"
          />
        </div>

        <div className="product-card-body">
          <p className="product-card-category">{product.category}</p>

          <h2 className="product-card-title">{product.title}</h2>

          <div className="product-card-meta">
            <span className="product-card-rating">
              <span className="star">★</span>
              {typeof product.rating === "object"
                ? product.rating.rate
                : product.rating}
            </span>
            <span className="product-card-price">${product.price}</span>
          </div>

          <Link href={`/products/${product.id}`}>
            <button className="product-card-btn">View Product</button>
          </Link>
        </div>
      </div>
    </>
  );
}