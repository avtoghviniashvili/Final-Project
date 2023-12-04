let mobileMenu = document.querySelector(".header_nav");
let burger = document.querySelector(".fa-bars");
let Xmark = document.querySelector(".fa-x");

burger.addEventListener("click", ()=>{mobileMenu.classList.add("show");
burger.style.display = "none";
Xmark.style.display = "block";
})

Xmark.addEventListener("click", ()=>{mobileMenu.classList.remove("show");
burger.style.display = "block";
Xmark.style.display = "none";
})