const navItems = document.querySelector('.nav-items');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.closeBtn');
const barItem = document.querySelector(".bar-item");

menu.addEventListener("click", ()=>{
    navItems.classList.toggle("active");
    menu.classList.toggle("active");
})
