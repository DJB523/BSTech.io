document.addEventListener("DOMContentLoaded", () => {
    // Example: Safely change text content of elements
    const title = document.querySelector(".title");
    if (title) {
        title.textContent = "Welcome to BS Tech!";
    }

    const subtitle = document.querySelector(".sub_title");
    if (subtitle) {
        subtitle.textContent = "Small Business & Home IT Support";
    }

    // Example: Add event listener to buttons (if they exist)
    const buttons = document.querySelectorAll(".btns button");
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            alert(`Button ${index + 1} clicked!`);
        });
    });

    // Add other scripts below safely
});
// =======================
// Mobile Navigation Toggle
// =======================
function toggleMenu() {
    const menuList = document.querySelector("nav .menu ul");
    menuList.classList.toggle("active");
}

// Optional: Close menu when a nav link is clicked (for single-page feel)
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav .menu ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const menuList = document.querySelector("nav .menu ul");
            if (menuList.classList.contains("active")) {
                menuList.classList.remove("active");
            }
        });
    });
});
