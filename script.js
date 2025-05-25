function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function getDate() {
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;
}