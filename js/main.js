document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (!hamburger || !navLinks) {
    console.error("Hamburger or nav-links NOT FOUND");
    return;
  }

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });