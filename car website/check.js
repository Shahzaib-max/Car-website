let active = document.querySelector(".acti")
let to = document.querySelector(".to")
let login = document.querySelector(".login")
let block = document.querySelector(".bloc")
let ln = document.querySelector(".ln")
let t = document.querySelector(".t")
let u = document.querySelector(".u")
let loginbtn = document.querySelector(".login-btn")
let burger = document.querySelector(".burger")
let icon = document.querySelector(".fa-solid")
let ico = document.querySelector(".fa-xmark")
// let icon2 = document.querySelector(".fa-solid")
let rotate = document.querySelector(".rotate")
let home = document.querySelector("#home")
let nav = document.querySelector(".navbar")
let ttt = document.querySelector(".ttt")
let shadow = document.querySelector(".shadow")
let blue = document.querySelector(".blue")


// alert("ff")
loginbtn.style.cursor = "pointer";
ln.style.cursor = "pointer";
loginbtn.addEventListener('click',() =>{
    // login.classList.toggle("to")
    icon.classList.add("block")
    // icon.style.color = "black";
})
icon.addEventListener('click',() =>{
    login.classList.add("to")
    // icon.style.color = "white";
    // icon.style.cursor = "pointer";
    icon.classList.remove("block")

})


burger.addEventListener('click',() =>{
    u.classList.toggle("bloc")
    // burger.classList.toggle("rotate")

})
home.addEventListener('mousemove',() =>{
    // alert("dd")
    // ttt.style.padding = "50px";

})
// window.addEventListener('scroll',() =>{
//     // alert("this page is scrolled")
//     // nav.style.boxshadow = "-3px 5px rgba(0, 0, 0, 0.1);"
//     nav.classList.add("shadow")
//     // alert(window.scroll)
// })
// // else{
// //     nav.classList.remove("shadow")
// // }
// if (scroll<1){
//     nav.classList.remove("shadow")
// }
ico.addEventListener('click',() =>{
    // login.classList.remove("to")
})
window.addEventListener('scroll',() =>{
    //    alert("d")
    if(scrollY > 0){
        nav.classList.add("shadow")
        nav.classList.add("blue")
        // nav.style.background = "blue";
    }
    else{
        nav.classList.remove("shadow")
        nav.classList.remove("blue")
        // nav.style.background = "white",
    }
})
