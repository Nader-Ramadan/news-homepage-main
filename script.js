let button = document.querySelector(".icon-menu");
let sideBar = document.querySelector("aside");
let esc = document.querySelector(".esc");
let main = document.querySelector("main");

button.addEventListener('click', () => {
    sideBar.classList.toggle("show");
    sideBar.classList.toggle("hide");
    main.classList.toggle("blur");
})
esc.addEventListener('click', () => {
    sideBar.classList.toggle("show");
    sideBar.classList.toggle("hide");
    main.classList.toggle("blur");
})