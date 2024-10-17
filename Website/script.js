// JavaScript for Responsive Navbar and Dark/Light Mode
const modeToggle = document.getElementById("mode-toggle");
const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const dropdowns = document.querySelectorAll('.dropdown'); // Select all dropdowns

// Toggle light/dark mode
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

// Toggle the navbar visibility on burger click
document.addEventListener("DOMContentLoaded", () => {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle'); // Burger animation
    });

    // Add click event to each dropdown
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click event from bubbling up
            dropdown.classList.toggle('active'); // Toggle active state for the dropdown
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active'); // Remove active state from all dropdowns
        });
    });
});
