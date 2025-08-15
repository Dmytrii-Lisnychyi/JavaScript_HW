if (confirm('Почати тестування?')) {
	const maxValue = 500
	const minValue = -500

	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	function randomPrizeList(totalPrize) {
		let prizeArr = []
		let sumPrize = 0
		do {
			let randomNum = getRandom(minValue, maxValue) // генеруємо нове число
			prizeArr.push(randomNum)
			sumPrize += randomNum
		} while (sumPrize < totalPrize)
		return prizeArr
	}

	function getUserPrize(prizeArr) {
		let sumPrize = 0
		while (true) {
			let userInput = prompt(`Введіть номер елемента від 0 до ${prizeArr.length - 1}, або -1 для виходу:`)
			if (userInput === null) break
			let userNumber = parseInt(userInput)
			if (isNaN(userNumber) || userNumber < 0 || userNumber >= prizeArr.length) {
				if (userNumber === -1) break
				alert("Некоректне число, спробуйте ще")
				continue
			}
			sumPrize += prizeArr[userNumber]
			alert(`Ваш виграш: ${prizeArr[userNumber]}`)
		}
		return sumPrize
	}


	const prizeList = randomPrizeList(15000)
	const userPrize = getUserPrize(prizeList)



	console.log(prizeList);
	document.write(`Ваш виграш: ${userPrize}`)
}