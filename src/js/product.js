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
  // bg.classList.add("right-0")
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

let eccommerce = document.querySelector('#eccomerce')
let x = document.querySelector('#X')
// let closeMenu = document.querySelector('#close-menu')

x.addEventListener('click', function () {
  eccommerce.classList.toggle("left-0")
  x.classList.toggle("left-[295px]")
})


let top1 = document.querySelectorAll("#top")
let flex = document.querySelectorAll("#flexx")
top1.forEach(function (item, index) {
  item.addEventListener('click', function () {
    flex[index].classList.toggle('block')
    flex[index].classList.toggle("hidden")
    item.classList.toggle("rotate-90")
  })
})

let openR = document.querySelector("#open_range")
let inp = document.querySelector("#inp")
let btnr = document.querySelector("#button_range")

openR.addEventListener('click', function () {
  inp.classList.toggle('active2')
  btnr.classList.toggle("rotate-[50%]")
})

let colors = document.querySelector("#colors")
let btn1 = document.querySelector("#btn-1")
let btn1s = document.querySelector("#btn-1s")
btn1s.addEventListener('click', function () {
  colors.classList.toggle("hidden")
  btn1.classList.toggle("rotate-90")
})

let size = document.querySelector("#size")
let btn2 = document.querySelector("#btn-2")
let btn2s = document.querySelector("#btn-2s")
btn2s.addEventListener('click', function () {
  size.classList.toggle("hidden")
  btn2.classList.toggle("rotate-[-50%]")
})

let style1 = document.querySelector("#style1")
let btn3 = document.querySelector("#btn-3")
let btn3s = document.querySelector("#btn-3s")
let hr = document.querySelector("#hr")
btn3s.addEventListener('click', function () {
  style1.classList.toggle("block")
  style1.classList.toggle("hidden")
  btn3.classList.toggle("rotate-90")
  hr.classList.toggle('hidden')
})

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input => {
  input.addEventListener("input", e => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach(input => {
  input.addEventListener("input", e => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if ((maxVal - minVal) < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

let productSize = document.querySelectorAll("#productSize")

productSize.forEach(function (item, index) {
  item.addEventListener('click', function () {
    productSize.forEach(function (item, index) {
      productSize[index].classList.remove("product-size")
    })
    productSize[index].classList.add("product-size")
  })
})
let dresStyle = document.querySelectorAll("#dresStyle")
let style2 = document.querySelector("#style1")
dresStyle.forEach(function (item, index) {
  item.addEventListener('click', function () {
    dresStyle.forEach(function (item, index) {
      dresStyle[index].classList.remove("product-size")
    })
    dresStyle[index].classList.add("product-size")
  })
})

let colorss = document.querySelectorAll("#color")
colorss.forEach(function (item, index) {
  // item.addEventListener('click' , function (item ,index){
  //   item[index].classList.remove("data-color")
  // } )
  item.addEventListener('click', function () {
    colorss.forEach(function (item, index) {
      item.style.backgroundColor = item.getAttribute("data-color")
      item.style.borderColor = "transparent"
    })
    item.style.borderColor = item.getAttribute("data-color")
    item.style.backgroundColor = "transparent"
  })
}) 