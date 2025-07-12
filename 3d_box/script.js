const cube = document.getElementById("cube");

let startX, startY;
let currentX = 0, currentY = 0;
let rotateX = 0, rotateY = 0;

function updateRotation() {
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// Mouse
cube.addEventListener("mousedown", e => {
    startX = e.clientX;
    startY = e.clientY;
    
    const mouseHandler = e => {
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        rotateY += currentX*0.3;
        rotateX -= currentY*0.3;
        updateRotation();
        startX = e.clientX;
        startY = e.clientY;
    }

    const upHandler = () => {
        document.removeEventListener("mousemove", mouseHandler);
        document.removeEventListener("mouseup", upHandler);
    }

    document.addEventListener("mousemove", mouseHandler);
    document.addEventListener("mouseup", upHandler);
});

// Touch
cube.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

cube.addEventListener("touchmove", e => {
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    currentX = x - startX;
    currentY = y - startY;
    rotateY += currentX*0.3;
    rotateX -= currentY*0.3;
    updateRotation();
    startX = x;
    startY = y;
});


