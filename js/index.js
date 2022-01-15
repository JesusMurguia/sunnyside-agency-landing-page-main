window.onload = function() {
    let navbtn=document.getElementById("mobile-menu-btn");

    navbtn.addEventListener("click",function(){
        let nav=document.getElementById("mobile-menu");
        nav.classList.toggle("hidden");
    });

    let navLinks=document.getElementsByClassName("nav-link");

    for(let i=0;i<navLinks.length;i++){
        navLinks[i].addEventListener("click",function(){
            let nav=document.getElementById("mobile-menu");
            nav.classList.add("hidden");
        });
    }

}