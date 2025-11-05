
const api = {
  async placeOrder(orderData) {
    // Simulated API call for placing an order
    console.log('API: Placing Order', orderData);
    await new Promise(resolve => setTimeout(resolve, 500)); 
    // If the backend were running, i had use the fetch
    /*
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    return response.json();
    */
    return { success: true, message: 'Order simulated successfully' };
  },

  async getOrders(email) {
    // Simulated API call for getting orders
    console.log(`API: Fetching Orders for ${email}`);
    await new Promise(resolve => setTimeout(resolve, 500));
    return []; // Return empty array for simulation
  },

  async sendContact(contactData) {
    // Simulated API call for contact form
    console.log('API: Sending Contact Message', contactData);
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true, message: 'Message simulated successfully' };
  }
};

export default api;