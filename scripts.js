function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}

document.getElementById('experience-arrow').addEventListener('click', function () {
  window.location.href = '#experience';
});

document.getElementById('projects-arrow').addEventListener('click', function () {
  window.location.href = '#projects';
});

document.getElementById('contact-arrow').addEventListener('click', function () {
  window.location.href = '#contact';
});
  