const navbarButton = document.querySelector("#navbar-toggle"); 
const navbarLinks = document.querySelector("#navbar-links");
const links = document.querySelectorAll(".scroll-link");

navbarButton.addEventListener("click", ()=>{
    navbarLinks.classList.toggle("show-links");
});

links.forEach( link => {
    link.addEventListener("click", ()=>{
        navbarLinks.classList.remove("show-links");
    })
})


