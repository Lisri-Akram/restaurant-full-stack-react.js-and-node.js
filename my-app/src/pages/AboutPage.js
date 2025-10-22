import React from 'react';
import styles from '../styles';

// About Page
const AboutPage = () => {
  return (
    <div style={styles.page}>
      <div style={styles.aboutHero}>
        <h1 style={styles.pageTitle}>About Savory Haven</h1>
        <p style={styles.pageSubtitle}>Where passion meets flavor</p>
      </div>
      <div style={styles.contentSection}>
        <div style={styles.aboutGrid}>
          <div style={styles.aboutCard}>
            <div style={styles.aboutIcon}>👨‍🍳</div>
            <h3 style={styles.aboutCardTitle}>Expert Chefs</h3>
            <p style={styles.aboutCardText}>
              Our team of world-class chefs brings decades of culinary expertise, creating
              dishes that blend tradition with innovation.
            </p>
          </div>
          <div style={styles.aboutCard}>
            <div style={styles.aboutIcon}>🌿</div>
            <h3 style={styles.aboutCardTitle}>Fresh Ingredients</h3>
            <p style={styles.aboutCardText}>
              We source only the finest, freshest ingredients from local farms and trusted
              suppliers to ensure quality in every dish.
            </p>
          </div>
          <div style={styles.aboutCard}>
            <div style={styles.aboutIcon}>⭐</div>
            <h3 style={styles.aboutCardTitle}>Premium Experience</h3>
            <p style={styles.aboutCardText}>
              From ambiance to service, every detail is crafted to provide you with an
              unforgettable dining experience.
            </p>
          </div>
        </div>
        <div style={styles.storySection}>
          <h2 style={styles.storyTitle}>Our Story</h2>
          <p style={styles.storyText}>
            Founded in 2015, Savory Haven began with a simple mission: to create a place where
            food lovers could come together and experience the joy of exceptional cuisine. What
            started as a small family restaurant has grown into a beloved culinary destination.
          </p>
          <p style={styles.storyText}>
            Today, we continue to honor our roots while embracing innovation, always striving
            to exceed your expectations and create memorable moments with every meal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;