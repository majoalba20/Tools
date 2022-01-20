let btn = document.querySelector(".button-info");
let menu = document.querySelector(".button-menu");

btn.addEventListener("click",()=>{btn.classList.toggle("active")});
menu.addEventListener("click",()=>{menu.classList.toggle("active")});

const modal = ()=>{
    let m = document.querySelector(".bg-modal");
    m.classList.add("showModal")
    let close = document.querySelector(".close");
    close.addEventListener("click",()=>{m.classList.remove("showModal")})
}

document.querySelector(".info").addEventListener("click",modal)