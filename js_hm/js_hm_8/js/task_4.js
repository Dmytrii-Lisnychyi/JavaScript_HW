if (confirm('Почати тестування?')) {

	function getRandomNum(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}

	function getCellList(cellsNum) {
		let arr = []
		for (let i = 0; i < cellsNum; i++) {
			arr.push(0)
		}
		return arr
	}

	function getShips(userShipsNum, userCellsNum, cellArr) {
		let shipsNum = 0
		while (shipsNum < userShipsNum) {
			let random = getRandomNum(0, userCellsNum - 1)

			if (cellArr[random] === 0) {
				cellArr[random] = 1
				shipsNum++
			}
		}
		return cellArr
	}

	const userInputCells = parseInt(prompt('Введіть кількість клітинок'))
	const userInputShips = parseInt(prompt('Введіть кількість кораблів'))
	if (
		!isNaN(userInputCells) &&
		!isNaN(userInputShips) &&
		userInputCells > 0 &&
		userInputShips > 0 &&
		userInputCells >= userInputShips
	) {
		alert('Почнемо гру')

		const cellList = getCellList(userInputCells)
		const ships = getShips(userInputShips, userInputCells, cellList)

		function getUserResultShots(arr) {
			while (arr.includes(1)) {
				const arrLength = arr.length
				const userShot = parseInt(prompt(`Введіть клітинку для пострілу (1 - ${arrLength})`))

				if (isNaN(userShot)) {
					alert('Ви ввели не число!')
					continue
				}
				if (userShot <= 0 || userShot > arrLength) {
					alert(`Невірне число! Введіть від 1 до ${arrLength}`)
					continue
				}

				if (arr[userShot - 1] === -1) {
					alert('Ви вже стріляли в цю клітинку!')
					continue
				}

				if (arr[userShot - 1] === 1) {
					alert('Влучили!')
					arr[userShot - 1] = -1
				} else {
					alert('Мимо!')
					arr[userShot - 1] = -1
				}
			}
			alert('Ви потопили всі кораблі. Гру завершено')
			return arr
		}

		getUserResultShots(ships)
	} else {
		alert('Неправильні дані! Кількість клітинок має бути більше кількості кораблів і обидва числа більше 0')
	}
}