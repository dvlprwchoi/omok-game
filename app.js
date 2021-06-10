// console.log("hello");

// Variables
const allCellGrids = document.querySelectorAll(".cellGrid");
const gameStatusMessage = document.querySelector(".gameStatusMessage");
const resetButton = document.querySelector(".resetButton");
// const cell25 = allCellGrids[24];
// console.log(allCellGrids);
// console.log(allCellGrids[0]);
// console.log(allCellGrids[24]);
// console.log(allCellGrids[24].classList[1]);



// Is next stone color white?
// (current stone color is black)
// yes -> true
// no -> false
let whiteStoneNext = true;

// Is this on-going game?
// yes -> true
// no -> false -> stop the game
let gameStatus = true;

let winner = null;

// Mark handler function
const mark = (event) => {
    // console.log(event.target.classList[1]);
    if (!gameStatus || event.target.classList[2] === "black" || event.target.classList[2] === "white") {
        return;
    }
    if (whiteStoneNext) {
        event.target.classList.add("black");
        // event.target.innerText = "black";
        winLogic();
        whiteStoneNext = !whiteStoneNext;
    } else {
        event.target.classList.add("white");
        // event.target.innerText = "white"
        winLogic();
        whiteStoneNext = !whiteStoneNext;
    }
}
// Reset handler function
const resetGame = () => {
    for (const cellGrid of allCellGrids) {
        cellGrid.classList.remove("black");
        cellGrid.classList.remove("white");
        cellGrid.classList.remove("won");    
        // console.log(cellGrid)
    }
    gameStatus = true;
    whiteStoneNext = true;
    winner = null;
    gameStatusMessage.innerText = "";
}




// const r1c1 = document.querySelector(".r1c1");
// const r1c1a = document.getElementsByClassName("r1c1");
// const r1c1b = allCellGrids[0].classList[1];
// console.log(r1c1.classList[1]);
// console.log(r1c1a[0].classList[1]);
// console.log(r1c1b);

// Win Logic Function
const winLogic = () => {
    const r1c1 = allCellGrids[0].classList[2];
    const r1c2 = allCellGrids[1].classList[2];
    const r1c3 = allCellGrids[2].classList[2];
    const r1c4 = allCellGrids[3].classList[2];
    const r1c5 = allCellGrids[4].classList[2];
    const r2c1 = allCellGrids[5].classList[2];
    const r2c2 = allCellGrids[6].classList[2];
    const r2c3 = allCellGrids[7].classList[2];
    const r2c4 = allCellGrids[8].classList[2];
    const r2c5 = allCellGrids[9].classList[2];
    const r3c1 = allCellGrids[10].classList[2];
    const r3c2 = allCellGrids[11].classList[2];
    const r3c3 = allCellGrids[12].classList[2];
    const r3c4 = allCellGrids[13].classList[2];
    const r3c5 = allCellGrids[14].classList[2];
    const r4c1 = allCellGrids[15].classList[2];
    const r4c2 = allCellGrids[16].classList[2];
    const r4c3 = allCellGrids[17].classList[2];
    const r4c4 = allCellGrids[18].classList[2];
    const r4c5 = allCellGrids[19].classList[2];
    const r5c1 = allCellGrids[20].classList[2];
    const r5c2 = allCellGrids[21].classList[2];
    const r5c3 = allCellGrids[22].classList[2];
    const r5c4 = allCellGrids[23].classList[2];
    const r5c5 = allCellGrids[24].classList[2];
    
    // console.log(r1c1, r1c2, r1c3, r1c4, r1c5, r2c1, r2c2, r2c3, r2c4, r2c5, r3c1, r3c2, r3c3, r3c4, r3c5, r4c1, r4c2, r4c3, r4c4, r4c5, r5c1, r5c2, r5c3, r5c4, r5c5);

    // console.log(allCellGrids[19]);
    // console.log(r1c4, r2c4, r3c4, r4c4, r5c4);
    
    if (r1c1 && r1c1 === r1c2 && r1c1 === r1c3 && r1c1 === r1c4 && r1c1 === r1c5) {
        allCellGrids[0].classList.add("won");
        allCellGrids[1].classList.add("won");
        allCellGrids[2].classList.add("won");
        allCellGrids[3].classList.add("won");
        allCellGrids[4].classList.add("won");
        gameStatus = false;
        winner = r1c1;
        console.log(winner);
        gameStatusMessage.innerHTML = `${winner} has won!!!`
    } else if (r2c1 && r2c1 === r2c2 && r2c1 === r2c3 && r2c1 === r2c4 && r2c1 === r2c5) {
        allCellGrids[5].classList.add("won");
        allCellGrids[6].classList.add("won");
        allCellGrids[7].classList.add("won");
        allCellGrids[8].classList.add("won");
        allCellGrids[9].classList.add("won");
        gameStatus = false;
        winner = r2c1;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r3c1 && r3c1 === r3c2 && r3c1 === r3c3 && r3c1 === r3c4 && r3c1 === r3c5) {
        allCellGrids[10].classList.add("won");
        allCellGrids[11].classList.add("won");
        allCellGrids[12].classList.add("won");
        allCellGrids[13].classList.add("won");
        allCellGrids[14].classList.add("won");
        gameStatus = false;
        winner = r3c1;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r4c1 && r4c1 === r4c2 && r4c1 === r4c3 && r4c1 === r4c4 && r4c1 === r4c5) {
        allCellGrids[15].classList.add("won");
        allCellGrids[16].classList.add("won");
        allCellGrids[17].classList.add("won");
        allCellGrids[18].classList.add("won");
        allCellGrids[19].classList.add("won");
        gameStatus = false;
        winner = r4c1;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r5c1 && r5c1 === r5c2 && r5c1 === r5c3 && r5c1 === r5c4 && r5c1 === r5c5) {
        allCellGrids[20].classList.add("won");
        allCellGrids[21].classList.add("won");
        allCellGrids[22].classList.add("won");
        allCellGrids[23].classList.add("won");
        allCellGrids[24].classList.add("won");
        gameStatus = false;
        winner = r5c1;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r1c1 && r1c1 === r2c1 && r1c1 === r3c1 && r1c1 === r4c1 && r1c1 === r5c1) {
        allCellGrids[0].classList.add("won");
        allCellGrids[5].classList.add("won");
        allCellGrids[10].classList.add("won");
        allCellGrids[15].classList.add("won");
        allCellGrids[20].classList.add("won");
        gameStatus = false;
        winner = r1c1;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r1c2 && r1c2 === r2c2 && r1c2 === r3c2 && r1c2 === r4c2 && r1c2 === r5c2) {
        allCellGrids[1].classList.add("won");
        allCellGrids[6].classList.add("won");
        allCellGrids[11].classList.add("won");
        allCellGrids[16].classList.add("won");
        allCellGrids[21].classList.add("won");
        gameStatus = false;
        winner = r1c2;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r1c3 && r1c3 === r2c3 && r1c3 === r3c3 && r1c3 === r4c3 && r1c3 === r5c3) {
        allCellGrids[2].classList.add("won");
        allCellGrids[7].classList.add("won");
        allCellGrids[12].classList.add("won");
        allCellGrids[17].classList.add("won");
        allCellGrids[22].classList.add("won");
        gameStatus = false;
        winner = r1c3;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r1c4 && r1c4 === r2c4 && r1c4 === r3c4 && r1c4 === r4c4 && r1c4 === r5c4) {
        allCellGrids[3].classList.add("won");
        allCellGrids[8].classList.add("won");
        allCellGrids[13].classList.add("won");
        allCellGrids[18].classList.add("won");
        allCellGrids[23].classList.add("won");
        gameStatus = false;
        winner = r1c4;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r1c5 && r1c5 === r2c5 && r1c5 === r3c5 && r1c5 === r4c5 && r1c5 === r5c5) {
        allCellGrids[4].classList.add("won");
        allCellGrids[9].classList.add("won");
        allCellGrids[14].classList.add("won");
        allCellGrids[19].classList.add("won");
        allCellGrids[24].classList.add("won");
        gameStatus = false;
        winner = r1c5;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r1c5 && r1c5 === r2c4 && r1c5 === r3c3 && r1c5 === r4c2 && r1c5 === r5c1) {
        allCellGrids[4].classList.add("won");
        allCellGrids[8].classList.add("won");
        allCellGrids[12].classList.add("won");
        allCellGrids[16].classList.add("won");
        allCellGrids[20].classList.add("won");
        gameStatus = false;
        winner = r1c5;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r1c1 && r1c1 === r2c2 && r1c1 === r3c3 && r1c1 === r4c4 && r1c1 === r5c5) {
        allCellGrids[0].classList.add("won");
        allCellGrids[6].classList.add("won");
        allCellGrids[12].classList.add("won");
        allCellGrids[18].classList.add("won");
        allCellGrids[24].classList.add("won");
        gameStatus = false;
        winner = r1c1;
        console.log(winner);
        gameStatusMessage.innerText = `${winner} has won!!!`
    } else if (r1c1 && r1c2 && r1c3 && r1c4 && r1c5 && r2c1 && r2c2 && r2c3 && r2c4 && r2c5 && r3c1 && r3c2 && r3c3 && r3c4 && r3c5 && r4c1 && r4c2 && r4c3 && r4c4 && r4c5 && r5c1 && r5c2 && r5c3 && r5c4 && r5c5) {
        gameStatus = false;
        console.log(winner);
        gameStatusMessage.innerText = "Game is tied!"
    }
}


// Event listener
for (const cellGrid of allCellGrids) {
    cellGrid.addEventListener("click", mark);
}
resetButton.addEventListener("click", resetGame);
// cell25.addEventListener("click", mark);