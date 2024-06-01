let resMenu = document.querySelector('#responsive-menu')
let hamMenu = document.querySelector('#hamburger-menu')
let closeMenu = document.querySelector('#close-menu')
let bg = document.querySelector("#bg")
let body  = document.querySelector("body")
hamMenu.addEventListener('click', function () {
  resMenu.classList.add("right-0")
  resMenu.classList.remove("-right-full")
  body.classList.add("overflow-hidden")
  bg.classList.add("right-0")
})

bg.addEventListener('click' , function(){
  resMenu.classList.add("-right-full")
  resMenu.classList.remove("right-0")
  bg.classList.remove("right-0")
})

closeMenu.addEventListener('click', function () {
  resMenu.classList.add("-right-full")
  resMenu.classList.remove("right-0")
  body.classList.remove("overflow-hidden")
})

let sizeShop = document.querySelectorAll("#size-shop")

sizeShop.forEach(function (item, index) {
    item.addEventListener('click', function () {
        sizeShop.forEach(function (item, index) {
            sizeShop[index].classList.remove("size_active")
        })
        sizeShop[index].classList.add("size_active")
    })
})

let img = document.querySelectorAll("#img")
let imgBig = document.querySelector("#imgBig")
img.forEach(function (item, index) {
    item.addEventListener('click', function () {
        img.forEach(function (item, index) {
            item.classList.remove("border1")
        })
        imgBig.src = img[index].src
        img[index].classList.add("border1")
    })
})

let borderBottom = document.querySelectorAll("#borderBottom")
let box = document.querySelector(".boxes1")
let box1 = document.querySelector(".boxes2")
let box2 = document.querySelector(".boxes3")
borderBottom.forEach(function (item, index) {
    item.addEventListener('click', function () {
        borderBottom.forEach(function (item, index) {
            borderBottom[index].classList.remove("border-b1")
            item.style.color = "#807D7E"
            box.classList.toggle("hidden")
            box1.classList.toggle("hidden")
        })
        borderBottom[index].classList.add("border-b1")
        item.style.color = "#000000"
        box2.classList.add("hidden")
    })
})

// borderBottom.forEach(function(item , index){
//     item.addEventListener('click' , function(){
//         borderBottom.forEach(function(item , index){
//                 item.style.color = "#807D7E"
//             })
//             item.style.color = "#000000"
//     })
// })
// let imageZoom = document.querySelector("#imageZoom")
// imageZoom.addEventListener('mousemove', (event) => {
//     imageZoom.style.setProperty('--display', 'block');
//     let pointer = {
//         x: (event.offsetX * 100) / imageZoom.offsetWidth,
//         y: (event.offsetY * 100) / imageZoom.offsetHeight
//     }
//     imageZoom.style.setProperty('--zoom-x', pointer.x + '%');
//     imageZoom.style.setProperty('--zoom-y', pointer.y + '%');
//     console.log(pointer);
// })
// imageZoom.addEventListener('mouseleave', () => {
//     imageZoom.style.setProperty('--display', 'none');
// })

sizeShop.forEach(function (item, index) {
    item.addEventListener('click', function () {
        sizeShop.forEach(function (item, index) {
            item[index].classList.remove("size_active")
        })
        sizeShop[index].classList.add("size_active")
    })
})

let colorCircle = document.querySelectorAll("#colorCircle")

colorCircle.forEach(function (item, index) {
    item.addEventListener('click', function () {
        colorCircle.forEach(function (item, index) {
            colorCircle[index].classList.remove("circle")
        })
        colorCircle[index].classList.add("circle")
    })
})