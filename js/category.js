let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categoria");

document.querySelector(".titulo-categoria").innerText = categoria;

fetch(`https://dummyjson.com/products/category/${categoria}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let seccion = document.querySelector(".prod3");
        let productos = "";
        for (let i = 0; i < data.products.length; i++) {
            productos += `<article>
                <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
                <h2>${data.products[i].title}</h2>
                <p>${data.products[i].description}</p>
                <h3>$${data.products[i].price}</h3>
                <a class="boton" href="./product.html?id=${data.products[i].id}">ver detalle</a>
            </article>`;
        }
        seccion.innerHTML = productos;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });