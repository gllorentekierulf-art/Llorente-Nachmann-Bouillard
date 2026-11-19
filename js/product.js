let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProducto = queryStringObj.get("id");

fetch(`https://dummyjson.com/products/${idProducto}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        document.querySelector(".producto-nombre").innerText = data.title;
        document.querySelector(".producto-marca").innerText = "Marca: " + data.brand;
        document.querySelector(".producto-descripcion").innerText = data.description;
        document.querySelector(".producto-precio").innerText = "Precio: $" + data.price;
        document.querySelector(".producto-stock").innerText = "Stock: " + data.stock + " unidades";
        document.querySelector(".producto-foto").innerHTML = `<img src="${data.thumbnail}" alt="${data.title}">`;
        document.querySelector(".producto-categoria").innerHTML = `Categoría: <a href="./category.html?categoria=${data.category}">${data.category}</a>`;

        let tags = "";
        for (let i = 0; i < data.tags.length; i++) {
            if (i < 3) {
                tags += `<li>${data.tags[i]}</li>`;
            }
        }
        document.querySelector(".tags").innerHTML = tags;

        let reviews = "";
        for (let i = 0; i < data.reviews.length; i++) {
            reviews += `<article class="review">
                <h3>Rating: ${data.reviews[i].rating}</h3>
                <p>${data.reviews[i].comment}</p>
                <p>Fecha: ${data.reviews[i].date}</p>
                <p>Usuario: ${data.reviews[i].reviewerName}</p>
            </article>`;
        }
        document.querySelector(".lista-reviews").innerHTML = reviews;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });