import React from 'react';
import { useApp } from '../AppProvider';
import styles from '../styles';

// Cart Modal
const CartModal = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, setCurrentPage } = useApp();

  const handleCheckout = () => {
    onClose();
    setCurrentPage('checkout');
  };

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>Your Cart</h2>
          <button onClick={onClose} style={styles.closeButton}>✕</button>
        </div>
        {cart.length === 0 ? (
          <p style={styles.emptyMessage}>Your cart is empty</p>
        ) : (
          <>
            <div style={styles.cartItems}>
              {cart.map(item => (
                <div key={item.id} style={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={styles.cartItemImage} />
                  <div style={styles.cartItemInfo}>
                    <h4 style={styles.cartItemName}>{item.name}</h4>
                    <p style={styles.cartItemPrice}>${item.price}</p>
                  </div>
                  <div style={styles.quantityControls}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={styles.quantityButton}
                    >
                      -
                    </button>
                    <span style={styles.quantity}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={styles.quantityButton}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={styles.removeButton}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
            <div style={styles.cartFooter}>
              <div style={styles.totalSection}>
                <span style={styles.totalLabel}>Total:</span>
                <span style={styles.totalAmount}>${getTotalPrice()}</span>
              </div>
              <button onClick={handleCheckout} style={styles.checkoutButton}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;