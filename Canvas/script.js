const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d") // gives 2D drawing area

// drawing a rectangle

ctx.fillStyle = "blue" // set colour of the shape
ctx.fillRect(50, 50, 100, 100) // x, y, width, height

// outlined rectangle

ctx.strokeStyle = "red"
ctx.lineWidth = 5
ctx.strokeRect(200, 50, 100, 100)

let x = 10 // initial position
let speed = 2



function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height) // clearing entire canvas
    ctx.fillStyle = "blue"
    
    ctx.fillRect(x, 100, 100, 100)
    x = x + speed
    
    if (x + 100 > canvas.width || x < 0){
        speed = -speed
    }
    
    requestAnimationFrame(animate) // runs the 'animate' function smoothly on repeat
}

/*
'x' is the co-ordinate of the left-top cornor of the rectagle,
that's why condition is x + 100 > canvas.width, so that 
the right corners of the rectagle stays in the canvas frame
*/

animate()