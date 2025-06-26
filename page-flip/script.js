const book = document.getElementById("book");
const pages = [];
let currentPage = 0;
const totalPages = 5; // You can increase this number

// Create multiple pages
for (let i = 0; i < totalPages; i++) {
  const page = document.createElement("div");
  page.className = "page";
  page.innerHTML = `
    <div class="front">Page ${i * 2 + 1}</div>
    <div class="back">Page ${i * 2 + 2}</div>
  `;
  page.style.zIndex = totalPages - i;
  book.appendChild(page);
  pages.push(page);
}

function flipNext() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}

function flipPrev() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
  }
}


//   let flippedPages = [];

//   function flipPage(n) {
//     const page = document.getElementById('page' + n);
//     if (!flippedPages.includes(n)) {
//       page.classList.add('flipped');
//       flippedPages.push(n);

//     } else {
//       page.classList.remove('flipped');
//       flippedPages = flippedPages.filter(p => p !== n && p <= n);
//     }

//     reorderPages(n);
//   }

//   function reorderPages(n) {
//     const pages = document.querySelectorAll('.page');
//     pages.forEach((page, index) => {
//       const pageNum = index + 1;
//       if (flippedPages.includes(pageNum)) {
//         page.style.zIndex = pageNum;
//       } else {
//         page.style.zIndex = 100 - pageNum;
//       }
//     });
//   }

//   function goToPage(targetPage) {
//     let currentPage = flippedPages.length > 0 ? Math.max(...flippedPages) : 0;
//     let direction = targetPage > currentPage ? 1 : -1;

//     const interval = setInterval(() => {
//       if (currentPage === targetPage) {
//         clearInterval(interval);
//         return;
//       }

//       currentPage += direction;
//       flipPage(currentPage);

//     }, 150);
//   }

//   function goToBookmark(n){
//     // reorderPage();
//     goToPage(n);
//   }
