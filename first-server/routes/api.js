const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const nodemailer = require('nodemailer');

// Configure Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// POST - Place Order
router.post('/orders', async (req, res) => {
  try {
    const orderData = req.body;
    
    // Create new order
    const order = new Order(orderData);
    await order.save();

    // Calculate total with tax and delivery
    const subtotal = parseFloat(orderData.total);
    const tax = subtotal * 0.1;
    const delivery = 5.00;
    const finalTotal = (subtotal + tax + delivery).toFixed(2);

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.GMAIL_USER,
      to: orderData.email,
      subject: `Order Confirmation - ${orderData.orderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #ff6b6b, #ffd93d); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">🍽️ Savory Haven</h1>
            <p style="color: white; font-size: 18px; margin: 10px 0 0 0;">Order Confirmation</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #333;">Hi <strong>${orderData.name}</strong>,</p>
            <p style="font-size: 16px; color: #333;">Thank you for your order! We're excited to prepare your meal.</p>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #ff6b6b; margin-top: 0;">Order Details</h2>
              <p><strong>Order ID:</strong> ${orderData.orderId}</p>
              <p><strong>Status:</strong> <span style="color: #ffd93d; font-weight: bold;">${orderData.status}</span></p>
              <p><strong>Order Date:</strong> ${new Date().toLocaleString()}</p>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Items Ordered:</h3>
              ${orderData.items.map(item => `
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                  <span>${item.name} x ${item.quantity}</span>
                  <span style="font-weight: bold;">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              `).join('')}
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #ff6b6b;">
                <div style="display: flex; justify-content: space-between; padding: 5px 0;">
                  <span>Subtotal:</span>
                  <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 5px 0;">
                  <span>Delivery:</span>
                  <span>$${delivery.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 5px 0;">
                  <span>Tax (10%):</span>
                  <span>$${tax.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; font-size: 18px; font-weight: bold; color: #ff6b6b;">
                  <span>Total:</span>
                  <span>$${finalTotal}</span>
                </div>
              </div>
            </div>

            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Delivery Address</h3>
              <p style="margin: 5px 0;">${orderData.address}</p>
              <p style="margin: 5px 0;">${orderData.city}, ${orderData.zipCode}</p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${orderData.phone}</p>
              ${orderData.notes ? `<p style="margin: 5px 0;"><strong>Notes:</strong> ${orderData.notes}</p>` : ''}
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666;">Estimated delivery time: <strong>30-45 minutes</strong></p>
              <p style="color: #666; font-size: 14px;">You will receive updates about your order status via email.</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 14px;">Need help? Contact us at hello@savoryhaven.com</p>
              <p style="color: #999; font-size: 14px;">© 2025 Savory Haven. All rights reserved.</p>
            </div>
          </div>
        </div>
      `
    };

    // Send notification email to restaurant
    const restaurantMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `🔔 New Order Received - ${orderData.orderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #ff6b6b;">New Order Alert!</h2>
          <p><strong>Order ID:</strong> ${orderData.orderId}</p>
          <p><strong>Customer:</strong> ${orderData.name}</p>
          <p><strong>Email:</strong> ${orderData.email}</p>
          <p><strong>Phone:</strong> ${orderData.phone}</p>
          <p><strong>Address:</strong> ${orderData.address}, ${orderData.city}, ${orderData.zipCode}</p>
          
          <h3>Order Items:</h3>
          <ul>
            ${orderData.items.map(item => `<li>${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</li>`).join('')}
          </ul>
          
          <p><strong>Total Amount:</strong> $${finalTotal}</p>
          ${orderData.notes ? `<p><strong>Special Instructions:</strong> ${orderData.notes}</p>` : ''}
          
          <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 5px;">
            ⏰ Please prepare and deliver within 30-45 minutes
          </p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(restaurantMailOptions);

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      order: order
    });

  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to place order',
      error: error.message
    });
  }
});

// GET - Get orders by email
router.get('/orders/:email', async (req, res) => {
  try {
    const orders = await Order.find({ email: req.params.email }).sort({ createdAt: -1 });
    res.json({
      success: true,
      orders: orders
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders',
      error: error.message
    });
  }
});

// POST - Contact form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="padding: 15px; background: #f5f5f5; border-radius: 5px;">${message}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Error sending contact message:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message
    });
  }
});

module.exports = router;