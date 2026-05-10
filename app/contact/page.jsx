export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-root {
          font-family: 'DM Sans', sans-serif;
          color: #f5f0e8;
          padding-bottom: 4rem;
        }

        /* Hero */
        .contact-hero {
          text-align: center;
          padding: 5rem 2rem 4rem;
          margin-bottom: 4rem;
          position: relative;
          overflow: hidden;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,175,55,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-label {
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

        .contact-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .contact-hero-title em {
          font-style: italic;
          color: #d4af37;
        }

        .contact-hero-sub {
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(245,240,232,0.5);
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding: 0 1rem;
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        /* Form */
        .contact-form-card {
          background: linear-gradient(145deg, rgba(22,22,36,0.98), rgba(14,14,24,0.98));
          border: 1px solid rgba(212,175,55,0.12);
          border-radius: 20px;
          padding: 2.5rem;
        }

        .form-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #f5f0e8;
          margin-bottom: 2rem;
        }

        .form-field {
          width: 100%;
          background: rgba(245,240,232,0.04);
          border: 1px solid rgba(212,175,55,0.12);
          color: #f5f0e8;
          padding: 0.85rem 1rem;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 300;
          margin-bottom: 1rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }

        .form-field::placeholder {
          color: rgba(245,240,232,0.25);
        }

        .form-field:focus {
          border-color: rgba(212,175,55,0.4);
          background: rgba(212,175,55,0.04);
        }

        textarea.form-field {
          resize: vertical;
          min-height: 130px;
        }

        .form-submit {
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
          margin-top: 0.5rem;
        }

        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(212,175,55,0.4);
        }

        /* Info */
        .contact-info { display: flex; flex-direction: column; gap: 1rem; }

        .info-header {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #f5f0e8;
          margin-bottom: 0.5rem;
        }

        .info-card {
          background: linear-gradient(145deg, rgba(22,22,36,0.98), rgba(14,14,24,0.98));
          border: 1px solid rgba(212,175,55,0.1);
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: border-color 0.2s;
        }

        .info-card:hover {
          border-color: rgba(212,175,55,0.25);
        }

        .info-card-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .info-card-label {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 0.3rem;
        }

        .info-card-value {
          font-size: 0.875rem;
          font-weight: 300;
          color: rgba(245,240,232,0.6);
        }

        .contact-footer-note {
          text-align: center;
          margin-top: 3.5rem;
          font-size: 0.78rem;
          color: rgba(245,240,232,0.25);
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="contact-root">
        <div className="contact-hero">
          <span className="contact-label">We're Here</span>
          <h1 className="contact-hero-title">
            Get in <em>Touch</em>
          </h1>
          <p className="contact-hero-sub">
            Have questions or need help? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-card">
            <h2 className="form-section-title">Send a Message</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="form-field"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-field"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="form-field"
            />
            <button className="form-submit">Send Message</button>
          </div>

          {/* Info */}
          <div className="contact-info">
            <h2 className="info-header">Contact Details</h2>

            <div className="info-card">
              <span className="info-card-icon">📍</span>
              <div>
                <p className="info-card-label">Address</p>
                <p className="info-card-value">Kerala, India</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-card-icon">📞</span>
              <div>
                <p className="info-card-label">Phone</p>
                <p className="info-card-value">+91 98765 43210</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-card-icon">📧</span>
              <div>
                <p className="info-card-label">Email</p>
                <p className="info-card-value">support@shopsy.com</p>
              </div>
            </div>
          </div>
        </div>

        <p className="contact-footer-note">We usually respond within 24 hours 🚀</p>
      </div>
    </>
  );
}