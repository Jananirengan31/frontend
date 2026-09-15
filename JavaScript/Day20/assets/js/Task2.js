const getUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data = await response.json();

        document.getElementById("name").textContent = data.name;
        document.getElementById("city").textContent = data.address.city;
    } catch (error) {
        console.log(error);
    }
};

getUser();