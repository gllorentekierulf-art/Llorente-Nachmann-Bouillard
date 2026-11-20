let formBuscador = document.querySelector(".buscador");
let campoBuscar = document.querySelector(".campo-buscar");
let errorBuscador = document.querySelector(".error-buscador");

formBuscador.addEventListener("submit", function (event) {
    event.preventDefault();
    if (campoBuscar.value == "") {
        errorBuscador.innerText = "El campo de búsqueda no puede estar vacío";
    } else {
        if (campoBuscar.value.length < 3) {
            errorBuscador.innerText = "El término debe tener al menos 3 caracteres";
        } else {
            this.submit();
        }
    }
});