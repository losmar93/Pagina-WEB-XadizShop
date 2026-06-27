// document.addEventListener("DOMContentLoaded", () => {

// const btnLogin = document.getElementById("btnLogin");
// const modal = document.getElementById("modalLogin");
// const cerrar = document.querySelector(".cerrar");

// btnLogin.addEventListener("click", () => {
//     modal.style.display = "flex";
// });

// cerrar.addEventListener("click", () => {
//     modal.style.display = "none";
// });

// window.addEventListener("click", (e) => {
//     if (e.target === modal) {
//         modal.style.display = "none";
//     }});
// });

const contenido = document.getElementById("contenido");
const btnLogin = document.getElementById("btnLogin");
const modal = document.getElementById("modalLogin");
const cerrar = document.getElementById(".cerrar");


btnLogin.addEventListener("click", () => {
    modal.style.display = "flex";
    contenido.classList.add("blur");
});

cerrar.addEventListener("click", () => {
    modal.style.display = "none";
    contenido.classList.remove("blur");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {

        modal.style.display = "none";
        contenido.classList.remove("blur");
    }
});