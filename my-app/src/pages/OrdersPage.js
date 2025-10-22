import React from 'react';
import { useApp } from '../AppProvider';
import styles from '../styles';

// Orders Page
const OrdersPage = () => {
  const { orders } = useApp();

  return (
    <div style={styles.page}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Your Orders</h1>
        <p style={styles.pageSubtitle}>Track your order history</p>
      </div>
      <div style={styles.contentSection}>
        {orders.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>📦</div>
            <h3 style={styles.emptyTitle}>No orders yet</h3>
            <p style={styles.emptyText}>Start ordering delicious meals!</p>
          </div>
        ) : (
          <div style={styles.ordersList}>
            {orders.map((order, index) => (
              <div key={index} style={styles.orderCard}>
                <div style={styles.orderHeader}>
                  <div>
                    <h3 style={styles.orderTitle}>Order #{order.orderId}</h3>
                    <p style={styles.orderDate}>{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span style={styles.orderStatus}>{order.status}</span>
                </div>
                <div style={styles.orderItems}>
                  {order.items.map((item, i) => (
                    <div key={i} style={styles.orderItem}>
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div style={styles.orderFooter}>
                  <span style={styles.orderTotal}>Total: ${order.total}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;