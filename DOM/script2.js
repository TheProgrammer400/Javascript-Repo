onst list = document.querySelector(".language")

function addLanguage(langName){
    const newItem = document.createElement("li")
    newItem.innerHTML = langName
    list.appendChild(newItem)

    // not the proper way
}

addLanguage("Python")

// optimised way of doing this

function addOptiLanguage(langName){
    const li = document.createElement("li")
    // using textNode

    li.appendChild(document.createTextNode(langName)) // adding text to the new element
    list.appendChild(li) // adding new 'li' to the list
}

addOptiLanguage("C++")


// removing the element

const lastElement = document.querySelector("li:last-child")
lastElement.remove()