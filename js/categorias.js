fetch("https://dummyjson.com/products/categories")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let listaCategorias = document.querySelector(".lista");
        let categorias = "";
        for (let i = 0; i < data.length; i++) {
            categorias += `<li><a href="./category.html?categoria=${data[i].slug}">${data[i].name}</a></li>`;
        }
        listaCategorias.innerHTML = categorias;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });
