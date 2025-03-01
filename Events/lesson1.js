// click event

const button = document.querySelector("#btn")
let n = 0

button.addEventListener("click", function (){
    n++;

    if (n % 2 == 1){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        button.innerHTML = "Change to light" 
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        button.innerHTML = "Change to dark"
    }
})


// double click event

const dbButton = document.querySelector("#dbBtn")

dbButton.addEventListener("dblclick", function () {
    let textNode = document.createTextNode("Double clicked!")
    let targetElement = document.querySelector("#dbdiv")
    let h2 = document.createElement("h2")
    h2.appendChild(textNode)
    targetElement.appendChild(h2)
})


// mouse hover event

const hoverButton = document.querySelector("#hoverBtn")
let count = 0

hoverButton.addEventListener("mouseover", function () {
    count++;
    
    let para = document.querySelector("#hoverpara")
    para.textContent = `Hovering count: ${count}`
})


// keydown event

document.addEventListener("keydown", function (event){
    let para = document.querySelector("#keydownpara")
    para.textContent = `You pressed: ${event.key}`
})


// input event

const textEntry1 = document.querySelector("#inputevent")

textEntry1.addEventListener("input", function (event){
    let para = document.querySelector("#inputpara")
    para.textContent = `Typed: ${event.target.value}`
})

/*
event.target refers to the input field,
while event.target.value represents the 
value inside the text entry or the input field.
*/


// change event

const textEntry2 = document.querySelector("#changeEvent")

textEntry2.addEventListener("change", function (event){
    let para = document.querySelector("#changepara")
    para.textContent = `Typed: ${event.target.value}`
})