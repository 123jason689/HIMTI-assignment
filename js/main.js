window.addEventListener("scroll", function(){
    let navbar = this.document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 85);
});