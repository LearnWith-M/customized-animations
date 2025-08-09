const canvas = document.getElementById("doodleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize with window
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let mouse = { x: null, y: null };
let last = null;

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function draw() {
  if (mouse.x && last) {
    ctx.strokeStyle = "rgba(50, 50, 50, 0.3)";
    ctx.lineWidth = 1.5;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
  }

  last = { ...mouse };

  // Fade old lines slightly (trailing effect)
  ctx.fillStyle = "rgba(255, 251, 230, 0.03)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(draw);
}

draw();