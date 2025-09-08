if (confirm('Почати тестування?')) {
	const getRandomNum = (min: number, max: number): number =>
		min + Math.floor(Math.random() * (max - min + 1))

	const getBattleBoard = (rowCount: number, colCount: number): number[][] =>
		Array.from({ length: rowCount }, () => Array(colCount).fill(0))

	function placeShips(board: number[][], shipNum: number): number[][] {
		let placed: number = 0
		while (placed < shipNum) {
			const row: number = getRandomNum(0, board.length - 1)
			const col: number = getRandomNum(0, board[0].length - 1)
			if (board[row][col] === 0) {
				board[row][col] = 1
				placed++
			}
		}
		return board
	}

	const EMPTY: number = 0, SHIP: number = 1, HIT: number = -1, MISS: number = -2

	function shoot(board: number[][], y: number, x: number): string {
		if (y < 0 || y >= board.length || x < 0 || x >= board[0].length) {
			return "invalid"
		}
		if (board[y][x] === SHIP) {
			board[y][x] = HIT
			return "hit"
		}
		if (board[y][x] === EMPTY) {
			board[y][x] = MISS
			return "miss"
		}
		return "repeat"
	}

	function playTurn(board: number[][]): string {
		const y: number = parseInt(prompt(`Input Y coordinate (0-${board.length - 1})`, "3") || "0")
		const x: number = parseInt(prompt(`Input X coordinate (0-${board[0].length - 1})`, "3") || "0")

		return shoot(board, y, x)
	}

	function playGame(rows: number = 6, cols: number = 6, shipsCount: number = 5, shotsCount: number = 10): void {
		const board: number[][] = placeShips(getBattleBoard(rows, cols), shipsCount);
		let ships: number = shipsCount
		let shots: number = shotsCount

		while (ships > 0 && shots > 0) {
			const result: string = playTurn(board)

			if (result === "invalid") {
				alert("Невірні координати!")
				continue
			}

			if (result === "hit") {
				ships--
				shots--
				alert(`Є влучання! Залишилось [ ${ships} ] кораблів і [ ${shots} ] пострілів.`)
			} else if (result === "miss") {
				shots--
				alert(`Ви не влучили! Залишилось [ ${shots} ] пострілів і [ ${ships} ] кораблів`)
			} else if (result === "repeat") {
				shots--
				alert(`Ви вже стріляли сюди! Залишилось [ ${shots} ] пострілів і [ ${ships} ] кораблів`)
			}

			console.log(board)
		}

		alert(ships === 0 ? "Ви перемогли!" : "Постріли закінчились. Поразка!");
	}

	playGame();
}
