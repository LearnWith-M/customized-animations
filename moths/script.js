document.getElementById('container');
for (let i = 0; i <= 20; i++) {
    const div = document.createElement('div');
    div.className = 'item';
    div.style.setProperty('--i', i);
    div.style.setProperty('--vx', 0);
    div.style.setProperty('--vy', 0);
    div.style.setProperty('--x', 0);
    div.style.setProperty('--y', 0);
    div.style.setProperty('--flycolor', 'gray');
    container.appendChild(div);}


const items = document.querySelectorAll(".item");

const positions = Array.from(items).map(() => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
}));


let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

fetch("/moths/moth.html")
  .then((response) => response.text())
  .then((html) => {
    items.forEach((itm, index) => {itm.innerHTML = html });
  })
  .catch((error) => {
    console.error("Error loading moth.html:", error);
  });

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  animate();
});


document.addEventListener("mouseover", (e)=>{
  animate();
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const items = document.querySelectorAll(".item");

  // Random velocity and starting position
  items.forEach((item) => {
    let vx = (Math.random() - 0.5) * 2; // velocity x (-1 to 1)
    let vy = (Math.random() - 0.5) * 2; // velocity y (-1 to 1)
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    item.style.setProperty("--vx", vx);
    item.style.setProperty("--vy", vy);

    let update = () => {
      x += vx * 5;
      y += vy * 5;

      // bounce on edge
      if (x <= 0 || x >= window.innerWidth - 20) vx *= -1;
      if (y <= 0 || y >= window.innerHeight - 20) vy *= -1;

      item.style.left = `${x}px`;
      item.style.top = `${y}px`;

      requestAnimationFrame(update);
    };

    update();
  });
});

function animate() {
  items.forEach((item, i) => {
    let pos = positions[i];

    const moth = item.querySelector(".moth");
  if (!moth) return;

  const rect = moth.getBoundingClientRect();
  const mothX = rect.left + rect.width / 2;
  const mothY = rect.top + rect.height / 2;

  const dx = mouse.x - mothX;
  const dy = mouse.y - mothY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  
  dark_color = [0, 0, 0];
  light_color = [255, 255, 0]; 


  if (dist < 200) {
    moth.style.setProperty("--mcolor", getColorIntensity(dist, 10, 200 , ...dark_color, ...light_color));
  } else {
    moth.style.setProperty("--mcolor", dark_color);
  }
  });

  requestAnimationFrame(animate);
}

function getColorIntensity(dist, min, max, r1, g1, b1, r2, g2, b2) {
  // Clamp distance
  let factor = (dist - min) / (max - min);
  factor = Math.max(0, Math.min(1, factor)); // Clamp between 0 and 1

  const r_val = Math.floor(r1 + (r2 - r1) * (1 - factor));
  const g_val = Math.floor(g1 + (g2 - g1) * (1 - factor));
  const b_val = Math.floor(b1 + (b2 - b1) * (1 - factor));

  return `rgb(${r_val}, ${g_val}, ${b_val})`;
}

