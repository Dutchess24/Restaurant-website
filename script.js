

// Toggle categories menu
function toggleMenu() {
  const categories = document.getElementById("menu-categories");
  categories.classList.toggle("hidden");
}

// Show dishes for category
function showCategory(category) {
  const menuItems = document.getElementById("menu-items");
  menuItems.innerHTML = ""; // clear
  menuData[category].forEach(item => {
    menuItems.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>${item.price}</p>
      </div>
    `;
  });
}

   
    const soups = [
      { name: "Chicken Noodle Soup", img: "images/Chicken-Noodle-Soup.webp" }, 
      { name: "Split Pea Soup", img: "images/split pea soup.jpeg" },
      { name: "Cream of Mushroom", img: "images/Cream-of-Mushroom-Soup.jpg" },
      { name: "Lobster Bisque", img: "images/lobster-bisque soup.jpg" },
      { name: "Cream of Chicken", img: "images/cream of chicken soup.jpeg" },
      { name: "Curry Corn Chowder", img: "images/curry corn chowder.jpeg" },
      { name: "Gazpacho", img: "images/Gazpacho.jpg" }
    ];

    // Get today’s day number (0–6)
    const today = new Date().getDay();

    // Pick soup for today
    const soupOfTheDay = soups[today];

    // Update text
    document.getElementById("soup").textContent = "Soup of the Day: " + soupOfTheDay.name;

    // Update image
    document.getElementById("soup-img").src = soupOfTheDay.img;
    document.getElementById("soup-img").alt = soupOfTheDay.name;
 
