const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")

let x = 100
let y = 200

const speed = 10

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height) // clear the whole canvas
    ctx.fillStyle = "green"
    ctx.fillRect(x, y, 50, 50)
}

function moveRect(event){
    if (event.key == "ArrowRight"){
        x = x + speed
    } else if (event.key == "ArrowLeft"){
        x = x - speed
    } else if (event.key == "ArrowUp"){
        y = y - speed
    } else if (event.key == "ArrowDown"){
        y = y + speed
    }

    draw()
}

document.addEventListener("keydown", moveRect)
draw();