const toggleButton = document.getElementById("navbar-menu-logo");
const navList = document.getElementById("header-list-container");

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("navbar-active");
});
