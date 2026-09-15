const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        document.getElementById("user1").textContent = data[0].name;
        document.getElementById("user2").textContent = data[1].name;
        document.getElementById("user3").textContent = data[2].name;
    } catch (error) {
        console.log(error);
    }
};

getUsers();