import React, { useState } from 'react';
import { useApp } from '../AppProvider';
import styles from '../styles';
import CartModal from './CartModal';

// Header Component
const Header = () => {
  const { currentPage, setCurrentPage, cart, wishlist } = useApp();
  const [showCart, setShowCart] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'orders', label: 'Your Orders' },
    { id: 'wishlist', label: 'Wishlist' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>🍽️</span>
            <span style={styles.logoText}>Savory Haven</span>
          </div>
          <nav style={styles.nav}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                style={{
                  ...styles.navButton,
                  ...(currentPage === item.id ? styles.navButtonActive : {})
                }}
              >
                {item.label}
                {item.id === 'wishlist' && wishlist.length > 0 && (
                  <span style={styles.badge}>{wishlist.length}</span>
                )}
              </button>
            ))}
            <button onClick={() => setShowCart(true)} style={styles.cartButton}>
              🛒 Cart
              {cart.length > 0 && <span style={styles.badge}>{cart.length}</span>}
            </button>
          </nav>
        </div>
      </header>
      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </>
  );
};

export default Header;