

// Toggle categories menu
function toggleMenu() {
  const categories = document.getElementById("menu-categories");
  categories.classList.toggle("hidden");
}

// Cart array
let cart = [];

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart!`);
}

// Update contact form message before submission
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function(e) {
  const cartMessage = cart.length > 0
    ? "Order:\n" + cart.map(item => `- ${item.name} - $${item.price}`).join("\n")
    : "No items selected.";

  // Add cart to the message field
  let messageField = contactForm.querySelector('input[placeholder="Your Message"]');
  if (!messageField) {
    messageField = contactForm.querySelector('textarea[name="message"]');
  }
  messageField.value = cartMessage;
});

// ------------------ Menu Items ------------------

// Example menu structure: you can expand with all items
const menuItems = [
  { category: "Starters", name: "Caesar Salad", price: 6.50, img: "images/ceasar salad.jpg" },
  { category: "Starters", name: "Garlic Bread", price: 4.00, img: "images/garlic bread.jpg" },
  { category: "Starters", name: "Mozarella Sticks", price: 5.50, img: "images/mozarella sticks.jpg" },
  { category: "Main Course", name: "Grilled Chicken & Veggies", price: 12.00, img: "images/grilled chicken and veggies.jpeg" },
  { category: "Main Course", name: "Spaghetti Bolognese", price: 11.00, img: "images/spaghetti-bolognese.jpeg" },
  { category: "Desserts", name: "Chocolate Lava Cake", price: 6.00, img: "images/chocolate lava-cake.jpg" },
  { category: "Drinks", name: "Apple Juice", price: 3.00, img: "images/apple juice.jpeg" },
  { category: "Kids Menu", name: "Mini Burger & Fries", price: 6.00, img: "images/mini burger and fries.jpeg" },
  // Add the rest of your items similarly
];

// Render all menu items into the page
const menuContainer = document.getElementById("menu-categories");
menuItems.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h4>${item.name}</h4>
    <p>$${item.price.toFixed(2)}</p>
    <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
  `;
  menuContainer.appendChild(card);
});

// ------------------ Soup of the Day ------------------
const soups = [
  { name: "Chicken Noodle Soup", img: "images/Chicken-Noodle-Soup.webp" }, 
  { name: "Split Pea Soup", img: "images/split pea soup.jpeg" },
  { name: "Cream of Mushroom", img: "images/Cream-of-Mushroom-Soup.jpg" },
  { name: "Lobster Bisque", img: "images/lobster-bisque soup.jpg" },
  { name: "Cream of Chicken", img: "images/cream of chicken soup.jpeg" },
  { name: "Curry Corn Chowder", img: "images/curry corn chowder.jpeg" },
  { name: "Gazpacho", img: "images/Gazpacho.jpg" }
];

// Pick soup for today
const today = new Date().getDay();
const soupOfTheDay = soups[today];

// Update Soup of the Day card
const soupCard = document.createElement("div");
soupCard.classList.add("card");
soupCard.innerHTML = `
  <img src="${soupOfTheDay.img}" alt="${soupOfTheDay.name}">
  <h4>${soupOfTheDay.name}</h4>
  <p>$5.00</p>
  <button onclick="addToCart('${soupOfTheDay.name}', 5)">Add to Cart</button>
`;
menuContainer.prepend(soupCard);
