document.querySelector("main").style.paddingTop = document.querySelector("header").offsetHeight + "px";

if(window.innerWidth < 591){
    document.querySelector(".header-burger").addEventListener("click", function(){
        if (document.querySelector(".header-nav").style.display == "none"){
            document.querySelector(".header-nav").style.display = "block";
        } else {
            document.querySelector(".header-nav").style.display = "none";
        }
    })
    
    let nav = document.querySelector("header").querySelector("nav");
    
    document.querySelector("body").addEventListener("click", function(e){
        if(e.target == document.querySelector(".header-burger") || e.target == nav){
            return;
        } else {
            document.querySelector(".header-nav").style.display = "none";
        }
    })
}