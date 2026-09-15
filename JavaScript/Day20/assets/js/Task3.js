const getPost = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();

        document.getElementById("title").textContent = data.title;
        document.getElementById("body").textContent = data.body;
    } catch (error) {
        console.log(error);
    }
};

getPost();