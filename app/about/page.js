export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root {
          font-family: 'DM Sans', sans-serif;
          color: #f5f0e8;
          padding-bottom: 4rem;
        }

        /* Hero */
        .about-hero {
          position: relative;
          text-align: center;
          padding: 5rem 2rem 4rem;
          overflow: hidden;
          margin-bottom: 5rem;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(212,175,55,0.1) 0%, transparent 70%);
        }

        .about-hero-label {
          display: inline-block;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4af37;
          border: 1px solid rgba(212,175,55,0.3);
          padding: 0.35rem 1rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
        }

        .about-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        .about-hero-title em {
          font-style: italic;
          color: #d4af37;
        }

        .about-hero-sub {
          font-size: 1rem;
          font-weight: 300;
          color: rgba(245,240,232,0.5);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Mission */
        .about-mission {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 5rem;
          padding: 0 1rem;
        }

        @media (max-width: 768px) {
          .about-mission { grid-template-columns: 1fr; gap: 2rem; }
        }

        .about-mission-img {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(212,175,55,0.12);
          filter: brightness(0.7) saturate(0.6);
          transition: filter 0.4s;
        }

        .about-mission-img:hover {
          filter: brightness(0.85) saturate(0.8);
        }

        .mission-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 0.75rem;
        }

        .mission-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #f5f0e8;
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }

        .mission-text {
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(245,240,232,0.5);
          line-height: 1.8;
        }

        /* Why Choose */
        .why-section { padding: 0 1rem; }

        .why-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .why-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #f5f0e8;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5px;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.1);
          border-radius: 16px;
          overflow: hidden;
        }

        .why-item {
          background: #0a0a12;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: background 0.3s;
        }

        .why-item:hover {
          background: rgba(212,175,55,0.04);
        }

        .why-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 1rem;
        }

        .why-item-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          color: #f5f0e8;
          margin-bottom: 0.6rem;
        }

        .why-item-text {
          font-size: 0.82rem;
          font-weight: 300;
          color: rgba(245,240,232,0.4);
          line-height: 1.6;
        }

        /* Footer note */
        .about-footer {
          text-align: center;
          margin-top: 5rem;
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          color: rgba(245,240,232,0.2);
          text-transform: uppercase;
        }
      `}</style>

      <div className="about-root">
        <div className="about-hero">
          <span className="about-hero-label">Our Story</span>
          <h1 className="about-hero-title">
            About <em>Shopsy</em>
          </h1>
          <p className="about-hero-sub">
            Your one-stop destination for stylish, affordable, and high-quality products.
          </p>
        </div>

        <div className="about-mission">
          <img
            src="https://img.magnific.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80"
            className="about-mission-img"
            alt="Our Mission"
          />
          <div>
            <p className="mission-eyebrow">What Drives Us</p>
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              At Shopsy, our mission is to make online shopping simple, enjoyable, and accessible for everyone. We aim to provide the best products at competitive prices with a seamless shopping experience that delights at every step.
            </p>
          </div>
        </div>

        <div className="why-section">
          <div className="why-header">
            <h2 className="why-title">Why Choose Us</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <span className="why-icon">🛍️</span>
              <div className="why-item-title">Wide Range</div>
              <p className="why-item-text">Explore a variety of products across multiple categories.</p>
            </div>
            <div className="why-item">
              <span className="why-icon">💰</span>
              <div className="why-item-title">Affordable Prices</div>
              <p className="why-item-text">Get the best deals without compromising quality.</p>
            </div>
            <div className="why-item">
              <span className="why-icon">⚡</span>
              <div className="why-item-title">Fast Delivery</div>
              <p className="why-item-text">Quick and reliable delivery at your doorstep.</p>
            </div>
          </div>
        </div>

        <div className="about-footer">
          © {new Date().getFullYear()} Shopsy — All rights reserved
        </div>
      </div>
    </>
  );
}