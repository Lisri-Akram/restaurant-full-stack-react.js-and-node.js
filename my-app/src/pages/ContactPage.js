import React, { useState } from 'react';
import api from '../api';
import styles from '../styles';

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.sendContact(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Contact Us</h1>
        <p style={styles.pageSubtitle}>We'd love to hear from you</p>
      </div>
      <div style={styles.contentSection}>
        <div style={styles.contactGrid}>
          <div style={styles.contactInfo}>
            <h3 style={styles.contactInfoTitle}>Get in Touch</h3>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📍</div>
              <div>
                <h4 style={styles.contactLabel}>Address</h4>
                <p style={styles.contactText}>123 Culinary Street, Food City, FC 12345</p>
              </div>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📞</div>
              <div>
                <h4 style={styles.contactLabel}>Phone</h4>
                <p style={styles.contactText}>+1 (555) 123-4567</p>
              </div>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📧</div>
              <div>
                <h4 style={styles.contactLabel}>Email</h4>
                <p style={styles.contactText}>hello@savoryhaven.com</p>
              </div>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>🕐</div>
              <div>
                <h4 style={styles.contactLabel}>Hours</h4>
                <p style={styles.contactText}>Mon-Sun: 10:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} style={styles.contactForm}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={styles.input}
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={styles.textarea}
              rows="5"
              required
            />
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
            {submitted && (
              <p style={styles.successMessage}>Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;