import React, { useState } from 'react';
import { useApp } from '../AppProvider';
import api from '../api';
import styles from '../styles';

// Checkout Page
const CheckoutPage = () => {
  const { cart, getTotalPrice, clearCart, setOrders, orders } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    notes: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subtotal = parseFloat(getTotalPrice());
    const delivery = 5.00;
    const taxRate = 0.1;
    const tax = subtotal * taxRate;
    const total = (subtotal + delivery + tax).toFixed(2);

    const orderData = {
      ...formData,
      items: cart,
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      delivery: delivery.toFixed(2),
      total: total,
      orderId: `ORD${Date.now()}`,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    try {
      await api.placeOrder(orderData); // This is simulated
      setOrders([...orders, orderData]);
      clearCart();
      setOrderPlaced(true);
      setTimeout(() => {
        setOrderPlaced(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          zipCode: '',
          notes: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error placing order (using local fallback):', error);
      // Fallback for when the mock API server is not running
      setOrders([...orders, orderData]);
      clearCart();
      setOrderPlaced(true);
    }
  };

  const subtotal = parseFloat(getTotalPrice());
  const delivery = 5.00;
  const tax = subtotal * 0.1;
  const finalTotal = (subtotal + delivery + tax);

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div style={styles.page}>
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>🛒</div>
          <h3 style={styles.emptyTitle}>Your cart is empty</h3>
          <p style={styles.emptyText}>Add items to cart before checkout</p>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div style={styles.page}>
        <div style={styles.successState}>
          <div style={styles.successIcon}>✅</div>
          <h2 style={styles.successTitle}>Order Placed Successfully!</h2>
          <p style={styles.successText}>
            Thank you for your order. We've started preparing your delicious meal.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Checkout</h1>
        <p style={styles.pageSubtitle}>Complete your order</p>
      </div>
      <div style={styles.contentSection}>
        <div style={styles.checkoutGrid}>
          <form onSubmit={handleSubmit} style={styles.checkoutForm}>
            <h3 style={styles.formSectionTitle}>Delivery Information</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={styles.input}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Street Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              style={styles.input}
              required
            />
            <div style={styles.formRow}>
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                style={{ ...styles.input, flex: 1 }}
                required
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                style={{ ...styles.input, flex: 1 }}
                required
              />
            </div>
            <textarea
              placeholder="Order Notes (Optional)"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              style={styles.textarea}
              rows="3"
            />
            <button type="submit" style={styles.placeOrderButton}>
              Place Order - ${finalTotal.toFixed(2)}
            </button>
          </form>
          <div style={styles.orderSummary}>
            <h3 style={styles.summaryTitle}>Order Summary</h3>
            <div style={styles.summaryItems}>
              {cart.map(item => (
                <div key={item.id} style={styles.summaryItem}>
                  <img src={item.image} alt={item.name} style={styles.summaryItemImage} />
                  <div style={styles.summaryItemInfo}>
                    <h4 style={styles.summaryItemName}>{item.name}</h4>
                    <p style={styles.summaryItemDetails}>
                      Qty: {item.quantity} × ${item.price}
                    </p>
                  </div>
                  <span style={styles.summaryItemPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div style={styles.summaryFooter}>
              <div style={styles.summaryRow}>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Delivery:</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div style={{ ...styles.summaryRow, ...styles.summaryTotal }}>
                <span>Total:</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;