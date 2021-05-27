const X_CLASS = 'x';
const O_CLASS = 'o';
const WIN_COMBINATIONS = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4 ,5],
    [6, 7, 8]
];

const cellElements = document.querySelectorAll('.cell');
let winMessageElement = document.querySelector('.winning-text');
let winMessageText = document.querySelector('[data-winning-text]');
const restartBtn = document.querySelector('.btn');
let turn = document.querySelector('.turn-text');
let oTurn;

startGame();

function clickHandle(event) {
    const cell = event.target;
    const currentClass =  oTurn ? O_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if(checkWin(currentClass)) {
        endGame(false);
    }
    else if(isDraw()){
        endGame(true)
    }
    else {
        switchTurn();
    }
}

function startGame() {
    oTurn = false;
    cellElements.forEach( cell => {
        cell.addEventListener('click', clickHandle, {once : true})
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
    });
    winMessageElement.classList.remove('show');
    turn.classList.add('show-text');
}

function endGame(draw) {
    if(draw) {
        winMessageText.innerText = `Draw!`;
    }
    else {
        winMessageText.innerText = `Team ${oTurn ? "O" : "X"} Wins`;
    }
    winMessageElement.classList.add('show');
    turn.classList.remove('show-text');
}

function checkWin(currentClass) {
    return WIN_COMBINATIONS.some( combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || 
        cell.classList.contains(O_CLASS)
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function switchTurn() {
    oTurn = !oTurn;
    if(oTurn){
        turn.innerHTML = `O's Turn`;
    }
    else {
        turn.innerHTML = `X's Turn`;
    }
}

restartBtn.addEventListener('click', startGame);
