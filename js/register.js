let formRegistro = document.querySelector(".form-registro");
let campoEmail = document.querySelector(".campo-email");
let campoPassword = document.querySelector(".campo-password");
let campoRepetir = document.querySelector(".campo-repetir");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");
let errorRepetir = document.querySelector(".error-repetir");

formRegistro.addEventListener("submit", function (event) {
    event.preventDefault();
    let hayErrores = false;
    errorEmail.innerText = "";
    errorPassword.innerText = "";

    if (campoEmail.value == "") {
        errorEmail.innerText = "El email es obligatorio";
        hayErrores = true;
    }

    if (campoPassword.value == "") {
        errorPassword.innerText = "La contraseña es obligatoria";
        hayErrores = true;
    } else {
        if (campoPassword.value.length < 6) {
            errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres";
            hayErrores = true;
        }
    }

    if (campoRepetir.value == campoPassword.value) {
        errorRepetir.innerText = "";
    } else {
        errorRepetir.innerText = "Las contraseñas no coinciden";
        hayErrores = true;
    }

    if (hayErrores == false) {
        this.submit();
    }
});