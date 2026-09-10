const box = document.getElementById("box");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    box.classList.remove("active");
});