import Link from "next/link";

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a12;
          min-height: 100vh;
          color: #f5f0e8;
        }

        /* ── Hero Banner ── */
        .hero-banner {
          position: relative;
          padding: 6rem 2rem 5rem;
          text-align: center;
          overflow: hidden;
        }

        .hero-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(212,175,55,0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .hero-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4af37;
          border: 1px solid rgba(212,175,55,0.3);
          padding: 0.35rem 1rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 5.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #f5f0e8;
        }

        .hero-title em {
          font-style: italic;
          color: #d4af37;
        }

        .hero-sub {
          font-size: 1rem;
          font-weight: 300;
          color: rgba(245, 240, 232, 0.55);
          max-width: 520px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
        }

        .hero-cta-row {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #d4af37, #b8962e);
          color: #0a0a12;
          padding: 0.85rem 2.2rem;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(212,175,55,0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(212,175,55,0.45);
        }

        .btn-ghost {
          background: transparent;
          color: rgba(245,240,232,0.7);
          padding: 0.85rem 2.2rem;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(245,240,232,0.15);
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.2s, color 0.2s;
        }

        .btn-ghost:hover {
          border-color: rgba(212,175,55,0.4);
          color: #d4af37;
        }

        /* ── Features ── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5px;
          background: rgba(212,175,55,0.08);
          border-top: 1px solid rgba(212,175,55,0.1);
          border-bottom: 1px solid rgba(212,175,55,0.1);
          margin: 4rem 0;
        }

        .feature-item {
          background: #0a0a12;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: background 0.3s;
        }

        .feature-item:hover {
          background: rgba(212,175,55,0.04);
        }

        .feature-icon {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          display: block;
        }

        .feature-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #f5f0e8;
          margin-bottom: 0.5rem;
        }

        .feature-desc {
          font-size: 0.825rem;
          font-weight: 300;
          color: rgba(245,240,232,0.45);
          line-height: 1.6;
        }

        /* ── CTA Banner ── */
        .cta-banner {
          margin: 0 2rem 4rem;
          background: linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03));
          border: 1px solid rgba(212,175,55,0.2);
          border-radius: 20px;
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-banner::before {
          content: 'SHOPSY';
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 12rem;
          font-weight: 700;
          color: rgba(212,175,55,0.03);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
        }

        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: #f5f0e8;
          margin-bottom: 1rem;
        }

        .cta-sub {
          font-size: 0.9rem;
          color: rgba(245,240,232,0.5);
          margin-bottom: 2rem;
          font-weight: 300;
        }
      `}</style>

      <div className="hero-root">
        {/* Hero */}
        <div className="hero-banner">
          <span className="hero-eyebrow">New Collection 2025</span>
          <h1 className="hero-title">
            Discover <em>Premium</em><br />Products
          </h1>
          <p className="hero-sub">
            Carefully curated selections, unbeatable prices, and a seamless shopping experience — all in one place.
          </p>
          <div className="hero-cta-row">
            <Link href="/products" className="btn-primary">Shop Now</Link>
            <Link href="/about" className="btn-ghost">Learn More</Link>
          </div>
        </div>

        {/* Features */}
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">🚚</span>
            <div className="feature-title">Fast Delivery</div>
            <p className="feature-desc">Get your products delivered quickly and safely to your doorstep.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💰</span>
            <div className="feature-title">Best Prices</div>
            <p className="feature-desc">Enjoy affordable pricing with top-quality products every day.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⭐</span>
            <div className="feature-title">Top Quality</div>
            <p className="feature-desc">Carefully selected products to ensure the best experience.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-banner">
          <h2 className="cta-title">Start Shopping Today</h2>
          <p className="cta-sub">Explore our wide range of products and find what you love.</p>
          <Link href="/products" className="btn-primary">Browse Products</Link>
        </div>
      </div>
    </>
  );
}