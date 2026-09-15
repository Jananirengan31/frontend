const getProduct = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();

        document.getElementById("title").textContent = data.title;
        document.getElementById("price").textContent = data.price;
    } catch (error) {
        console.log(error);
    }
};

getProduct();