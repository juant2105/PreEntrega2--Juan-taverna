const navToggle = document.querySelector(".hamburguesa")
const navMenu = document.querySelector(".navmenu")

navToggle.addEventListener("click" , () => {
   navMenu.classList.toggle("navmenu_visible"); 
});