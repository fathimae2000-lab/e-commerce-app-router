"use client";

import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const increaseQty = (id) => updateQuantity(id, 1);
  const decreaseQty = (id) => updateQuantity(id, -1);
  const removeItem = (id) => removeFromCart(id);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400&display=swap');
          .cart-empty {
            min-height: 50vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            font-family: 'DM Sans', sans-serif;
            color: rgba(245,240,232,0.35);
          }
          .cart-empty-icon { font-size: 3.5rem; }
          .cart-empty-text { font-size: 1rem; font-weight: 300; letter-spacing: 0.05em; }
        `}</style>
        <div className="cart-empty">
          <span className="cart-empty-icon">🛒</span>
          <p className="cart-empty-text">Your cart is empty</p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .cart-root {
          font-family: 'DM Sans', sans-serif;
          color: #f5f0e8;
          padding: 2rem 0;
        }

        .cart-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 600;
          color: #f5f0e8;
          margin-bottom: 2rem;
        }

        .cart-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 2rem;
        }

        @media (max-width: 900px) {
          .cart-grid { grid-template-columns: 1fr; }
        }

        .cart-items { display: flex; flex-direction: column; gap: 1rem; }

        .cart-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: linear-gradient(145deg, rgba(22,22,36,0.95), rgba(14,14,24,0.95));
          border: 1px solid rgba(212,175,55,0.1);
          border-radius: 14px;
          padding: 1.25rem;
          transition: border-color 0.2s;
        }

        .cart-item:hover {
          border-color: rgba(212,175,55,0.22);
        }

        .cart-item-img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          background: rgba(245,240,232,0.04);
          border-radius: 10px;
          padding: 0.5rem;
          flex-shrink: 0;
        }

        .cart-item-body { flex: 1; min-width: 0; }

        .cart-item-title {
          font-size: 0.875rem;
          font-weight: 400;
          color: rgba(245,240,232,0.9);
          margin-bottom: 0.3rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cart-item-price {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          color: #d4af37;
          margin-bottom: 0.75rem;
        }

        .qty-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .qty-btn {
          width: 28px;
          height: 28px;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.2);
          color: #d4af37;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          line-height: 1;
        }

        .qty-btn:hover { background: rgba(212,175,55,0.2); }

        .qty-value {
          font-size: 0.875rem;
          font-weight: 500;
          min-width: 24px;
          text-align: center;
          color: #f5f0e8;
        }

        .remove-btn {
          background: none;
          border: none;
          color: rgba(245,240,232,0.25);
          font-size: 1.1rem;
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.2s;
          flex-shrink: 0;
        }

        .remove-btn:hover { color: #e53e3e; }

        /* Summary */
        .order-summary {
          background: linear-gradient(145deg, rgba(22,22,36,0.98), rgba(14,14,24,0.98));
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 16px;
          padding: 2rem;
          height: fit-content;
          position: sticky;
          top: 90px;
        }

        .summary-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #f5f0e8;
          margin-bottom: 1.5rem;
        }

        .summary-divider {
          height: 1px;
          background: rgba(212,175,55,0.1);
          margin: 1rem 0;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: rgba(245,240,232,0.5);
          margin-bottom: 0.5rem;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .summary-total-label {
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(245,240,232,0.6);
        }

        .summary-total-price {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #f5f0e8;
        }

        .checkout-btn {
          width: 100%;
          margin-top: 1.5rem;
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

        .checkout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(212,175,55,0.4);
        }
      `}</style>

      <div className="cart-root">
        <h1 className="cart-title">Your Cart</h1>

        <div className="cart-grid">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-body">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => decreaseQty(item.id)}>−</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Items ({cart.length})</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span style={{ color: '#d4af37' }}>Free</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-total">
              <span className="summary-total-label">Total</span>
              <span className="summary-total-price">${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}