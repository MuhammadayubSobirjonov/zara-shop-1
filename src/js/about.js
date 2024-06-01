let resMenu = document.querySelector('#responsive-menu')
let hamMenu = document.querySelector('#hamburger-menu')
let closeMenu = document.querySelector('#close-menu')
// let hero = document.querySelector("#hero")
// let footer = document.querySelector("#footer")
// let header = document.querySelector("#header")

// header.addEventListener('click' , function(){
//   resMenu.classList.add("-right-full")
//   resMenu.classList.remove("right-0")
// })
// hero.addEventListener('click' , function(){
//   resMenu.classList.add("-right-full")
//   resMenu.classList.remove("right-0")
// })
// footer.addEventListener('click' , function(){
//   resMenu.classList.add("-right-full")
//   resMenu.classList.remove("right-0")
// })
hamMenu.addEventListener('click', function () {
  resMenu.classList.add("right-0")
  resMenu.classList.remove("-right-full")
})

closeMenu.addEventListener('click', function () {
  resMenu.classList.add("-right-full")
  resMenu.classList.remove("right-0")
})

let hInput = document.querySelector("#headerInput")
let hSearch = document.querySelector("#headerSearch")

hSearch.addEventListener('click' , function(){
  hInput.classList.toggle("hidden")
})