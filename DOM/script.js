const t1 = document.getElementById("title") // select heading through id
const h1 = document.getElementsByClassName("heading") // select heading through class name

console.log(t1.getAttribute("id"))
console.log(h1[0].getAttribute("class"))

/*
Note:
    getElementsByClassName always return an collection. That's 
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


console.log(t1.textContent) // text inside the h1 heading
