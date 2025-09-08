"use strict";
if (confirm('Почати тестування?')) {
    const getRandomNum = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const getBattleBoard = (rowCount, colCount) => Array.from({ length: rowCount }, () => Array(colCount).fill(0));
    function placeShips(board, shipNum) {
        let placed = 0;
        while (placed < shipNum) {
            const row = getRandomNum(0, board.length - 1);
            const col = getRandomNum(0, board[0].length - 1);
            if (board[row][col] === 0) {
                board[row][col] = 1;
                placed++;
            }
        }
        return board;
    }
    const EMPTY = 0, SHIP = 1, HIT = -1, MISS = -2;
    function shoot(board, y, x) {
        if (y < 0 || y >= board.length || x < 0 || x >= board[0].length) {
            return "invalid";
        }
        if (board[y][x] === SHIP) {
            board[y][x] = HIT;
            return "hit";
        }
        if (board[y][x] === EMPTY) {
            board[y][x] = MISS;
            return "miss";
        }
        return "repeat";
    }
    function playTurn(board) {
        const y = parseInt(prompt(`Input Y coordinate (0-${board.length - 1})`, "3") || "0");
        const x = parseInt(prompt(`Input X coordinate (0-${board[0].length - 1})`, "3") || "0");
        return shoot(board, y, x);
    }
    function playGame(rows = 6, cols = 6, shipsCount = 5, shotsCount = 10) {
        const board = placeShips(getBattleBoard(rows, cols), shipsCount);
        let ships = shipsCount;
        let shots = shotsCount;
        while (ships > 0 && shots > 0) {
            const result = playTurn(board);
            if (result === "invalid") {
                alert("Невірні координати!");
                continue;
            }
            if (result === "hit") {
                ships--;
                shots--;
                alert(`Є влучання! Залишилось [ ${ships} ] кораблів і [ ${shots} ] пострілів.`);
            }
            else if (result === "miss") {
                shots--;
                alert(`Ви не влучили! Залишилось [ ${shots} ] пострілів і [ ${ships} ] кораблів`);
            }
            else if (result === "repeat") {
                shots--;
                alert(`Ви вже стріляли сюди! Залишилось [ ${shots} ] пострілів і [ ${ships} ] кораблів`);
            }
            console.log(board);
        }
        alert(ships === 0 ? "Ви перемогли!" : "Постріли закінчились. Поразка!");
    }
    playGame();
}
