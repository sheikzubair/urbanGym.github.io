let sidebar = document.querySelector(".sidebar")
let openMenu = document.querySelector(".menu")
let closeMenu = document.querySelector(".close-menu")
let blackOverlay = document.querySelector(".black-overlay")
let blackOverlay2 = document.querySelector(".black-overlay-2")
let cartmenu = document.querySelector(".cart")
let cart = document.querySelector(".cart-bag")
let classItem = document.querySelector(".class-info")
let productImg = document.getElementsByClassName("product-img")
let product = document.getElementsByClassName("product")
let classes = document.getElementsByClassName("class-item")


function navbaranimate() {
    if (sidebar.style.right === "-50vw") {
        sidebar.style.right = "0%"
        blackOverlay.style.display = "block"
    }
    else {
        sidebar.style.right = "-50vw"
        blackOverlay.style.display = "none"

    }
}

function cartanimate() {
    if (cart.style.display === "none") {
        cart.style.display = "block"
        blackOverlay2.style.display = "block"
    }
    else {
        cart.style.display = "none"
        blackOverlay2.style.display = "none"
    }
}

let productarr = Array.from(product)
function hovereffect(index){
    productarr[index].firstElementChild.firstElementChild.style.scale = "1.09"
}
function hoverEffect(index){
    productarr[index].firstElementChild.firstElementChild.style.scale = "1"
}


let classesarr = Array.from(classes)
function hovereffectclasses(index){
    classesarr[index].firstElementChild.firstElementChild.style.scale = "1.09"
    classesarr[index].lastElementChild.style.color = "#FA9500"
    classesarr[index].lastElementChild.style.scale = "1.04"
}
function hoverEffectClasses(index){
    classesarr[index].firstElementChild.firstElementChild.style.scale = "1"
    classesarr[index].lastElementChild.style.color = "#1A1B1B"
    classesarr[index].lastElementChild.style.scale = "1"
};




// scroll anclasses
let divs = document.querySelectorAll(".div-left")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("div-left-show", entry.isIntersecting)
        if(entry.isIntersecting){
            observer.unobserve(entry.target)
        }
    })
},
{
    threshold:0.2
})

divs.forEach(div => {
    observer.observe(div)
})

let divs2 = document.querySelectorAll(".div-center")
const observer2 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("div-center-show", entry.isIntersecting)
        if(entry.isIntersecting){
            observer2.unobserve(entry.target)
        }
    })
}
)

divs2.forEach(div => {
    observer2.observe(div)
})
let divs3 = document.querySelectorAll(".div-right")
const observer3 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("div-right-show", entry.isIntersecting)
        if(entry.isIntersecting){
            observer3.unobserve(entry.target)
        }
    })
},{
    threshold:0.3
})

divs3.forEach(div => {
    observer3.observe(div)
})

let grow = document.querySelectorAll(".grow")

const growAnimate = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("grow-big",entry.isIntersecting)
        if(entry.isIntersecting){
            growAnimate.unobserve(entry.target)
        }
    })
})

grow.forEach(div =>{
    growAnimate.observe(div)
})

