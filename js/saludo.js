let emailGuardado = localStorage.getItem("email");
let itemLogin = document.querySelector(".item-login");
let itemRegistro = document.querySelector(".item-registro");
let itemSaludo = document.querySelector(".item-saludo");
let itemLogout = document.querySelector(".item-logout");

if (emailGuardado == null) {
    itemLogin.style.display = "block";
    itemRegistro.style.display = "block";
} else {
    itemSaludo.innerText = "Bienvenido: " + emailGuardado;
    itemSaludo.style.display = "block";
    itemLogout.style.display = "block";
    itemLogin.style.display = "none";
    itemRegistro.style.display = "none";
}