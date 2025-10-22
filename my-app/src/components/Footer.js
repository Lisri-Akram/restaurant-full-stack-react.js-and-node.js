import React from 'react';
import styles from '../styles';

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Savory Haven</h4>
          <p style={styles.footerText}>
            Bringing culinary excellence to your table since 2015.
          </p>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Quick Links</h4>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Privacy Policy</a>
            <a href="#" style={styles.footerLink}>Terms of Service</a>
            <a href="#" style={styles.footerLink}>FAQ</a>
          </div>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Follow Us</h4>
          <div style={styles.socialLinks}>
            <span style={styles.socialIcon}>📘</span>
            <span style={styles.socialIcon}>📷</span>
            <span style={styles.socialIcon}>🐦</span>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.copyright}>© 2025 Savory Haven. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;