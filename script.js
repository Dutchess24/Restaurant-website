

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
    // If you change input to textarea, use this instead:
    messageField = contactForm.querySelector('textarea[name="message"]');
  }
  messageField.value = cartMessage;
});

// Example for dynamically adding Add to Cart buttons
// You can add this inside your showCategory() function or wherever you generate cards
function createCard(item) {
  return `
    <div class="card">
      <img src="${item.img}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>$${item.price}</p>
      <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    </div>
  `;
}

// Example: Soup of the Day card with Add to Cart
const soupCardContainer = document.getElementById("soup-card-container"); // create a container div for soup
if (soupCardContainer) {
  soupCardContainer.innerHTML = `
    <div class="card">
      <img src="${soupOfTheDay.img}" alt="${soupOfTheDay.name}">
      <h4>${soupOfTheDay.name}</h4>
      <p>$5.00</p>
      <button onclick="addToCart('${soupOfTheDay.name}', 5)">Add to Cart</button>
    </div>
  `;
}

