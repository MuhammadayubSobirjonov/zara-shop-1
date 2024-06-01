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

let minus = document.querySelectorAll("#minus")
let numberr = document.querySelectorAll("#number")
let plus = document.querySelectorAll("#plus")
let cost = document.querySelectorAll("#cost")

minus.forEach(function (item, index) {
    item.addEventListener('click', function () {
        numberr[index].innerText = Number(numberr[index].innerText) - 1
        cost[index].innerText = Number(cost[index].innerText) - 29
    })
})



plus.forEach(function (item, index) {
    item.addEventListener('click', function () {
        numberr[index].innerHTML = Number(numberr[index].innerHTML) + 1
        cost[index].innerHTML = Number(cost[index].innerHTML) + 29
    })
})

let del = document.querySelectorAll("#del")
let cart = document.querySelectorAll("#cart")
let hr1 = document.querySelector("#hr1")
let hr2 = document.querySelector("#hr2")
del.forEach(function(item , index){
    item.addEventListener('click' , function(){
        cart[index].style.display = 'none'
        if (cart[index].innerText = 0) {
            hr1.classList.add("hidden")
            hr2.classList.add("hidden")
        }else{
            hr1.classList.remove("block")
            hr2.classList.remove("block")
        }
    })
})