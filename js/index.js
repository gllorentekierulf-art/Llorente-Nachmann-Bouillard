fetch("https://dummyjson.com/products/category/smartphones")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let seccion = document.querySelector(".prod1");
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

fetch("https://dummyjson.com/products/category/mobile-accessories")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let seccion = document.querySelector(".prod2");
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