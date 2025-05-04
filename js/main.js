// Mobile Nav Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Portfolio Filter
document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-item').forEach(item => {
      item.style.display = filter === 'all' || item.classList.contains(filter) ? 'block' : 'none';
    });
  });
});