// console.log("hello");

// Variables
const allCellGrids = document.querySelectorAll(".cellGrid");
// const cell25 = allCellGrids[24];
// console.log(allCellGrids);
// console.log(allCellGrids[0]);
// console.log(allCellGrids[24]);
// console.log(allCellGrids[24].classList[1]);



// Is next stone color black?
// (current stone color is white)
// yes -> true
// no -> false
let blackStoneNext = true;

// Handler function
const mark = (event) => {
    console.log(event.target.classList[1]);
    if (event.target.classList[2] === "black" || event.target.classList[2] === "white") {
        return;
    }
    if (blackStoneNext) {
        event.target.classList.add("white");
        event.target.innerText = "white";
        blackStoneNext = !blackStoneNext;
    } else {
        event.target.classList.add("black");
        event.target.innerText = "black"
        blackStoneNext = !blackStoneNext;
    }
}


// Event listener
for (const cellGrid of allCellGrids) {
    cellGrid.addEventListener("click", mark);
}
// cell25.addEventListener("click", mark);