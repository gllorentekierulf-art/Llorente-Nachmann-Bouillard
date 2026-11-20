let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let termino = queryStringObj.get("buscar");

document.querySelector(".titulo-busqueda").innerText = `Resultados de búsqueda para: ${termino}`;

fetch(`https://dummyjson.com/products/search?q=${termino}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        if (data.products.length == 0) {
            document.querySelector(".sin-resultados").innerText = `No hay resultados para el término: ${termino}`;
        } else {
            let resultados = "";
            for (let i = 0; i < data.products.length; i++) {
                resultados += `<article>
                    <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
                    <h2>${data.products[i].title}</h2>
                    <p>${data.products[i].description}</p>
                    <h3>$${data.products[i].price}</h3>
                    <a class="boton" href="./product.html?id=${data.products[i].id}">ver detalle</a>
                </article>`;
            }
            document.querySelector(".prod4").innerHTML = resultados;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });