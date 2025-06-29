document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  // Set hamburger color to blue by default
  if (menuIcon) {
    menuIcon.style.color = "blue";
  }

  // Toggle menu visibility
  menuIcon?.addEventListener("click", () => {
    navLinks?.classList.toggle("active");
  });
});
