let linkLogout = document.querySelector(".link-logout");

linkLogout.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("email");
    document.querySelector(".item-saludo").style.display = "none";
    document.querySelector(".item-logout").style.display = "none";
    document.querySelector(".item-login").style.display = "block";
    document.querySelector(".item-registro").style.display = "block";
});