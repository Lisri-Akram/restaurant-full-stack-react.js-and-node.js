// data.js

const menuItems = [
  // --- Main Courses ---
  {
    id: 101,
    name: 'Margherita Pizza',
    category: 'Pizza',
    price: 12.99,
    description: 'Fresh mozzarella, Italian plum tomatoes, basil, and a drizzle of olive oil.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    rating: 4.5
  },
  {
    id: 102,
    name: 'Savory Beef Burger',
    category: 'Main Course',
    price: 15.99,
    description: 'Juicy 6oz beef patty, cheddar, lettuce, tomato, pickles, and secret sauce on a brioche bun.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    rating: 4.8
  },
  {
    id: 103,
    name: 'Spaghetti Carbonara',
    category: 'Pasta',
    price: 14.50,
    description: 'Classic Roman pasta dish with guanciale, egg yolk, Pecorino cheese, and black pepper.',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
    rating: 4.6
  },
  {
    id: 104,
    name: 'Grilled Salmon with Asparagus',
    category: 'Seafood',
    price: 21.00,
    description: 'Perfectly grilled salmon fillet served with lemon-butter sauce and fresh roasted asparagus.',
    image: 'https://assets.surlatable.com/m/44350397b5ed6d76/72_dpi_webp-REC_301896_Salmon_Asparagus.jpg',
    rating: 4.7
  },

  // --- Appetizers ---
  {
    id: 201,
    name: 'Classic Caesar Salad',
    category: 'Appetizer',
    price: 8.99,
    description: 'Crisp romaine lettuce, Parmesan cheese, croutons, and creamy Caesar dressing.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    rating: 4.3
  },
  {
    id: 202,
    name: 'Crispy Calamari',
    category: 'Appetizer',
    price: 11.50,
    description: 'Lightly breaded and fried squid rings served with a spicy marinara dipping sauce.',
    image: 'https://www.somewhatsimple.com/wp-content/uploads/2020/05/grilled_salmon_asparagus_1.jpg',
    rating: 4.4
  },

  // --- Desserts ---
  {
    id: 301,
    name: 'Molten Chocolate Lava Cake',
    category: 'Dessert',
    price: 7.99,
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
    rating: 4.9
  },
  {
    id: 302,
    name: 'New York Cheesecake',
    category: 'Dessert',
    price: 6.50,
    description: 'Rich, creamy cheesecake with a graham cracker crust, topped with strawberry sauce.',
    image: 'https://www.spicebangla.com/wp-content/uploads/2024/02/Classic-New-York-cheesecake-recipe-2.jpg',
    rating: 4.7
  },

  // --- Beverages ---
  {
    id: 401,
    name: 'Freshly Squeezed Lemonade',
    category: 'Beverage',
    price: 4.99,
    description: 'Perfectly balanced sweet and tart homemade lemonade, served chilled.',
    image: 'https://ashleybrooke.com/wp-content/uploads/2022/03/Healthy-Fresh-Squeezed-Lemonade-Recipe-1-sq-scaled.jpg',
    rating: 4.4
  },
  {
    id: 402,
    name: 'Iced Caramel Macchiato',
    category: 'Beverage',
    price: 5.50,
    description: 'Espresso with vanilla syrup, milk, and caramel drizzle over ice.',
    image: 'https://thesupermomlife.com/wp-content/uploads/2020/10/starbuckscaramelmacchiatocopycat_6-scaled.jpg',
    rating: 4.6
  }
];

export { menuItems };