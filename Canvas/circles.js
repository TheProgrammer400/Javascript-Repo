const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("click", function (event) {
    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "purple";
    ctx.fill();
});
