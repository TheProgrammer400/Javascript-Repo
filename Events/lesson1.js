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