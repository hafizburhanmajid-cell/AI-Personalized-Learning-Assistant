document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle logic
  const menuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.getElementById("sidebar");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });
  }
});