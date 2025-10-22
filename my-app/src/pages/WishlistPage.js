import React from 'react';
import { useApp } from '../AppProvider';
import styles from '../styles';

// Wishlist Page
const WishlistPage = () => {
  const { wishlist, removeFromWishlist, addToCart } = useApp();

  return (
    <div style={styles.page}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Your Wishlist</h1>
        <p style={styles.pageSubtitle}>Save your favorite items for later</p>
      </div>
      <div style={styles.contentSection}>
        {wishlist.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>💝</div>
            <h3 style={styles.emptyTitle}>Your wishlist is empty</h3>
            <p style={styles.emptyText}>Start adding items you love!</p>
          </div>
        ) : (
          <div style={styles.wishlistGrid}>
            {wishlist.map(item => (
              <div key={item.id} style={styles.wishlistCard}>
                <img src={item.image} alt={item.name} style={styles.wishlistImage} />
                <div style={styles.wishlistContent}>
                  <h3 style={styles.wishlistTitle}>{item.name}</h3>
                  <p style={styles.wishlistDescription}>{item.description}</p>
                  <div style={styles.wishlistFooter}>
                    <span style={styles.wishlistPrice}>${item.price}</span>
                    <div style={styles.wishlistActions}>
                      <button
                        onClick={() => addToCart(item)}
                        style={styles.wishlistAddButton}
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        style={styles.wishlistRemoveButton}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;