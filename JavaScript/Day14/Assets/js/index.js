const title = document.getElementById("title")

const btn = document.getElementById("btn")



btn.addEventListener("click" ,() => {


    

    if(title.style.display === "none"){
     
        title.style.display = "block"
        

    }
    else{
        
       title.style.display = "none"
    }

    

})