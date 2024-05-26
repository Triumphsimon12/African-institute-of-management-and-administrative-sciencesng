//Add active class to nav links on click
navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
 link.addEventListener('click', () => {
  link.classList.add('active');
 });
});