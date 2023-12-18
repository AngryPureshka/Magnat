document.querySelector("main").style.paddingTop = document.querySelector("header").offsetHeight + "px";

if(window.innerWidth < 591){

    let nav = document.querySelector("header").querySelector("nav");

    document.querySelector(".header-burger").addEventListener("click", function(){
        if (document.querySelector(".header-nav").style.display == "block"){
            document.querySelector(".header-nav").style.display = "none";
            nav.style.opacity = 0;
        } else {
            document.querySelector(".header-nav").style.display = "block";
            nav.style.opacity = 1;
        }
    })
    
    document.querySelector("body").addEventListener("click", function(e){
        if(e.target == document.querySelector(".header-burger") || e.target == nav){
            return;
        } else {
            document.querySelector(".header-nav").style.display = "none";
            nav.style.opacity = 0;
            document.querySelector(".cost").style.display = "none";
        }
    })
}

document.querySelector(".banner-btn").addEventListener("click", function(){
    document.querySelector(".cost").style.display = "block";
})

document.querySelector(".close").addEventListener("click", function(e){
    document.querySelector(".cost").style.display = "none";
})