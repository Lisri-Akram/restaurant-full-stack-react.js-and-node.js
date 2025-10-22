import React from 'react';
import { useApp } from '../AppProvider';
import styles from '../styles';

// Menu Card Component
const MenuCard = ({ item }) => {
  const { addToCart, addToWishlist, wishlist } = useApp();
  const isWishlisted = wishlist.some(w => w.id === item.id);

  return (
    <div style={styles.menuCard}>
      <div style={styles.menuCardImageContainer}>
        <img src={item.image} alt={item.name} style={styles.menuCardImage} />
        <button
          onClick={() => addToWishlist(item)}
          style={{
            ...styles.wishlistButton,
            ...(isWishlisted ? styles.wishlistButtonActive : {})
          }}
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      <div style={styles.menuCardContent}>
        <span style={styles.category}>{item.category}</span>
        <h3 style={styles.menuCardTitle}>{item.name}</h3>
        <p style={styles.menuCardDescription}>{item.description}</p>
        <div style={styles.menuCardFooter}>
          <div>
            <span style={styles.rating}>⭐ {item.rating}</span>
            <span style={styles.price}>${item.price}</span>
          </div>
          <button onClick={() => addToCart(item)} style={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;