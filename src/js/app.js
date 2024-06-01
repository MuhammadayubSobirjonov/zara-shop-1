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

let hInput = document.querySelector("#headerInput")
let hSearch = document.querySelector("#headerSearch")

hSearch.addEventListener('click' , function(){
  hInput.classList.toggle("hidden")
})

let text = document.querySelectorAll("#text")
text.forEach(function (item, index) {
  item.addEventListener('click', function () {
    text.forEach(function (item, index) {
      item.style.color = "#00000080"
    })
    item.style.color = "#000000"
  })
})


var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
