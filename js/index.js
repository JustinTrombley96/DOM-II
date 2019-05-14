// DoubleClick
const dbl = document.querySelector(".img-content img");
dbl.addEventListener('dblclick', function () {
    console.log("You found the double click badge!")
})
//Click
const click = document.querySelector("footer");
click.addEventListener('click', function () {
    console.log("You found the click badge!")
})

//MouseOver
const mouse = document.querySelector(".logo-heading");
mouse.addEventListener('mouseover', function () {
    console.log("You found the hover badge!")
})

//KeyDown
const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', function (event) {
    console.log("You found the keydown badge!");

})
//Use the Scroll Wheel
const wheel = document.querySelector('body').addEventListener("wheel", myFunction);

function myFunction() {
    console.log("You found the wheel badge!")
}

//Copy 
const copy = document.querySelector('body')
copy.addEventListener('copy', function () {
    console.log("You found the copy badge!")
})

//Drag 
const drag = document.querySelector('body')
drag.addEventListener('drag', function () {
    console.log("You found the drag badge!")
})

//Drop
const dragEnd = document.querySelector('footer')
dragEnd.addEventListener('dragend', function () {
    console.log("You found the footer drop badge!")
})

//MouseOut Events
let mouseOut = document.querySelector('body')
mouseOut.addEventListener("mouseleave", function () {
    console.log("You found the out of bounds badge!")
})

//MouseEnter Events
let mouseEnter = document.querySelector('body')
mouseEnter.addEventListener("mouseenter", function () {
    console.log("You found the mouse enter badge!")
})

//Prevent Default
document.querySelector(".nav a")
    .addEventListener("click", function (event) {
        event.preventDefault()
    })

//Click and Propogation
const click2 = document.querySelector("footer p");
click2.addEventListener('click', function (ev) {
    console.log("You found the propogation and click badge!")
    //Propagation 
    ev.stopPropagation()

})