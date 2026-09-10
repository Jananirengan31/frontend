const products = [];

const productName = document.getElementById("productName");
const price = document.getElementById("price");
const category = document.getElementById("category");
const addProduct = document.getElementById("addProduct");
const productList = document.getElementById("productList");

addProduct.addEventListener("click", function () {

    const product = {
        name: productName.value,
        price: price.value,
        category: category.value
    };

    products.push(product);

    productList.innerHTML = "";

    products.forEach(function (product) {

        const div = document.createElement("div");

        div.classList.add("product-card");

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Category: ${product.category}</p>
        `;

        productList.appendChild(div);
    });

    productName.value = "";
    price.value = "";
    category.value = "";
});