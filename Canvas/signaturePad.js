const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")

let isDrawing = false
let lastX = 0
let lastY = 0
let isEraser = false

function mouseDownFunc(event){
    isDrawing = true
    lastX = event.offsetX
    lastY = event.offsetY

    ctx.beginPath() // start a new path for every tiny movement of mouse
    ctx.moveTo(lastX, lastY) // move to the mouse position
}

function mouseMoveFunc(event){
    if (!isDrawing){
        return 
    }

    if (isEraser){
        ctx.clearRect(event.offsetX-5, event.offsetY-5, 20, 20)
    } else {
        ctx.lineTo(event.offsetX, event.offsetY) // last position of the new stroke
        ctx.lineWidth = 2
        ctx.lineCap = "round"
        ctx.stroke()
        [lastX, lastY] = [event.offsetX, event.offsetY]
    }
}

function stopDrawing(){
    isDrawing = false
    ctx.beginPath() // reset the path so new strokes start fresh
}

function saveSignature(){
    const dataURL = canvas.toDataURL("image/png") // converts canvas image to PNG image
    const a = document.createElement("a") // create temp anchor tag in web page for download (dynamic)
    a.href = dataURL // linking
    a.download = "signature.png" // tells the browser that this should be downloaded as file instead of opening it
    a.click() // automatically, click the <a> tag, triggering the download
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function toggleEraser(){
    if (isEraser){
        isEraser = false
        document.getElementById("eraserbutton").innerText = "Use Eraser"
    } else {
        isEraser = true
        document.getElementById("eraserbutton").innerText = "Use Pen"
    }
}

canvas.addEventListener("mousedown", mouseDownFunc);
canvas.addEventListener("mousemove", mouseMoveFunc);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

// stop drawing

canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseleave", () => isDrawing = false)

// whenever mouseup or mouseleave, set the isDrawing to false

