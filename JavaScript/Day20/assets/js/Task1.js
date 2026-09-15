const getUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();

        document.getElementById("name").textContent = data.name;
        document.getElementById("email").textContent = data.email;
    } catch (error) {
        console.log(error);
    }
};

getUser();