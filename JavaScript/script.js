document.addEventListener("DOMContentLoaded", () => {

const btnLogin = document.getElementById("btnLogin");
const modal = document.getElementById("modalLogin");
const cerrar = document.querySelector(".cerrar");

btnLogin.addEventListener("click", () => {
    modal.style.display = "flex";
});

cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }});
});