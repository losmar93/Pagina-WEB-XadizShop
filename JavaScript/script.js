// JS del Login

const contenido = document.getElementById("contenido");
const btnLogin = document.getElementById("btnLogin");
const modal = document.getElementById("modalLogin");
const cerrar = document.querySelector(".cerrar");
const passwordInput = document.getElementById("password");
const visibleCheckbox = document.getElementById("visible");


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

visibleCheckbox.addEventListener("change", () => {
    passwordInput.type = visibleCheckbox.checked ? "text" : "password";
});


// boton del carousel

const slides = document.querySelectorAll(".slide")
const btnAnterior = document.querySelector(".anterior")
const btnSiguiente =document.querySelector(".siguiente")
let index =0;

function mostrarSlide(i){
    if (i >= slides.length) {
        index = 0;
    }  else if (i < 0){
        index = slides.length -1;
    }  else {
        index = i;
    }
    
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}
if (btnAnterior && btnSiguiente) {
    btnSiguiente.addEventListener("click", () => mostrarSlide(index + 1));
    btnAnterior.addEventListener("click", () => mostrarSlide(index - 1));
}

if (slides.length > 0) {
    mostrarSlide(0);
}
