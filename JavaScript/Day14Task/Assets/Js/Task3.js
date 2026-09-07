const details = document.getElementById("details");

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    details.classList.toggle("show")

    if (details.classList.contains("show")) {
        btn.textContent = "Hide Details";

    }
    else{
        btn.textContent = "Show Details";
    }
})