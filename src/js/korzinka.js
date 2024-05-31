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
borderBottom.forEach(function(item , index){
    item.addEventListener('click' , function(){
        borderBottom.forEach(function(item , index){
                borderBottom[index].classList.remove("border-b1")
            })
            borderBottom[index].classList.add("border-b1")
    })
})

borderBottom.forEach(function(item , index){
    item.addEventListener('click' , function(){
        borderBottom.forEach(function(item , index){
                item.style.color = "#807D7E"
            })
            item.style.color = "#000000"
    })
})
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

colorCircle.forEach(function(item , index){
    item.addEventListener('click' , function(){
        colorCircle.forEach(function(item , index){
            colorCircle[index].classList.remove("circle")
        })
        colorCircle[index].classList.add("circle")
    })
})