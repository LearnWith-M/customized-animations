 const container = document.getElementById("clipsContainer");
  for (let i = 0; i < 13; i++) {
    const clip = document.createElement("div");
    clip.className = "clip";
    container.appendChild(clip);
  }

const totalPages = 5;
let currentFlippedPage = 0;

function goToPage(target) {
  for (let i = 1; i <= totalPages; i++) {
    const page = document.getElementById("page" + i);
    if (i <= target) {
      page.classList.add("flipped");
    } else {
      page.classList.remove("flipped");
    }

  }
  currentFlippedPage = target;

  reorderPages();
}


function reorderPages() {
  const pages = document.querySelectorAll(".page");
  const total = pages.length;

  pages.forEach((page, index) => {
    const i = index + 1;
    // Bring unflipped pages to top
    if (i <= currentFlippedPage) {
      page.style.zIndex = i;
    } else {
      page.style.zIndex = total - i + 1;
    }
  });
}

function reorderPage() {
  flippedPages = [];
  const pages = document.querySelectorAll(".page");
  pages.forEach((page, index) => {
    page.classList.remove("flipped");
    page.style.zIndex = pages.length - index;
  });
}
// Optional: reorder on load
window.onload = () => {
  reorderPages();
};
