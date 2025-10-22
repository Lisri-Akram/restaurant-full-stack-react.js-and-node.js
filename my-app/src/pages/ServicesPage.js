import React from 'react';
import styles from '../styles';

// Services Page
const ServicesPage = () => {
  const services = [
    {
      icon: '🍽️',
      title: 'Dine-In Experience',
      description: 'Enjoy our cozy ambiance with premium table service and personalized attention.'
    },
    {
      icon: '🚗',
      title: 'Fast Delivery',
      description: 'Hot, fresh meals delivered to your doorstep within 30-45 minutes.'
    },
    {
      icon: '🎉',
      title: 'Event Catering',
      description: 'Professional catering services for weddings, corporate events, and parties.'
    },
    {
      icon: '📦',
      title: 'Takeaway',
      description: 'Quick and convenient takeaway service with online ordering available.'
    },
    {
      icon: '🎂',
      title: 'Custom Orders',
      description: 'Special dietary requirements? We create customized meals just for you.'
    },
    {
      icon: '💳',
      title: 'Loyalty Program',
      description: 'Earn points with every order and enjoy exclusive discounts and rewards.'
    }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.servicesHero}>
        <h1 style={styles.pageTitle}>Our Services</h1>
        <p style={styles.pageSubtitle}>Committed to serving you better</p>
      </div>
      <div style={styles.contentSection}>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <div style={styles.serviceIcon}>{service.icon}</div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;