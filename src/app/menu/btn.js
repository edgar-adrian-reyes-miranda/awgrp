const menu = document.querySelector("#menu");
const menuItems = document.querySelector(".menu-items");

menu.addEventListener("click", () => {
  menuItems.classList.toggle("show");
});
