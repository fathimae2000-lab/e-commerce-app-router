import { products } from "../../lib/products";
import ProductCard from "../components/productCard/ProductCard";

export default function Products() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .products-root {
          font-family: 'DM Sans', sans-serif;
          padding: 3rem 0 4rem;
        }

        .products-header {
          margin-bottom: 3rem;
          margin-left:60px;
        }

        .products-eyebrow {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4af37;
          display: block;
          margin-bottom: 0.6rem;
        }

        .products-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: #f5f0e8;
          line-height: 1.15;
        }

        .products-title em {
          font-style: italic;
          color: #d4af37;
        }

        .products-count {
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(245, 240, 232, 0.35);
          margin-top: 0.5rem;
          letter-spacing: 0.05em;
        }

        .products-divider {
          height: 1px;
          background: rgba(212, 175, 55, 0.1);
          margin-bottom: 2.5rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 1280px) {
          .products-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>

      <div className="products-root">
        <div className="products-header">
          <span className="products-eyebrow">Our Collection</span>
          <h1 className="products-title">
            All <em>Products</em>
          </h1>
          <p className="products-count">{products.length} items available</p>
        </div>

        <div className="products-divider" />

        <div className="products-grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}