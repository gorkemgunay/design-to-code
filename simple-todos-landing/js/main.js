const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const times = document.getElementById("times");
const notes = document.getElementById("notes");

hamburger.addEventListener("click", e => {
    e.preventDefault();
    menu.classList.toggle("open");
});
