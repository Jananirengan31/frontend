const card = document.getElementById("card");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    card.classList.toggle("dark");
});