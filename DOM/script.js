const t1 = document.getElementById("title") // select heading through id
const h1 = document.getElementsByClassName("heading") // select heading through class name

console.log(t1.getAttribute("id"))
console.log(h1[0].getAttribute("class"))

/*
Note:
getElementsByClassName() always return an collection. That's 
    why while using .getAttribute(), we have to write h1[0] to 
    access the first heading and same goes for .setAttribute() method
*/

// h1[0].setAttribute("class", "test")
console.log(h1)
// console.log(h1[0].getAttribute("class"))



// styling the elements after selecting them

t1.style.color = "brown"
t1.style.backgroundColor = "white"
t1.style.borderRadius = "5px"


// modifying and selecting the text inside the elemnet
console.log(t1.textContent) // text inside the h1 heading (prints hidden text also)
console.log(t1.innerText) // won't print the hidden text in the title


// querySelector():

const selector1 = document.querySelector("h1") // will select the first h1 appearing in the file
const selector2 = document.querySelector("#title2") // passing ID in the selector
const selector3 = document.querySelector(".heading") // passing class in the selector

const myList = document.querySelector("ul")
// const element = document.querySelector("li") // only first element
const elements = myList.querySelectorAll("li") // HTML collection

console.log(elements[1].innerText) // have to used index, just like array

elements.forEach(function (element){
    element.style.color = "brown" // changing color of all the elements of the list
})

// convert HTML collection into an array

const listItems = document.getElementsByClassName("list-item") // HTML collection
const listItemsArray = Array.from(listItems) // .forEach() can be used here

