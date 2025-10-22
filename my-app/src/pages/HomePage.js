import React, { useState } from 'react';
import styles from '../styles';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data';

// Home Page
const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Main Course', 'Appetizer', 'Dessert', 'Beverage'];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Savory Haven</h1>
          <p style={styles.heroSubtitle}>Experience culinary excellence with every bite</p>
          <button style={styles.heroButton}>Explore Menu</button>
        </div>
      </section>
      <section style={styles.menuSection}>
        <h2 style={styles.sectionTitle}>Our Menu</h2>
        <div style={styles.categoryFilter}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                ...styles.categoryButton,
                ...(selectedCategory === cat ? styles.categoryButtonActive : {})
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={styles.menuGrid}>
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;