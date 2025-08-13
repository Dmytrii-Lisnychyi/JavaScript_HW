if (confirm('Почати тестування?')) {
	function getEvenNumbers(num1, num2, num3) {
		let even = 0
		if (num1 % 2 === 0) even++
		if (num2 % 2 === 0) even++
		if (num3 % 2 === 0) even++
		return even
	}

	function getPositiveNumbers(num1, num2, num3) {
		let positive = 0
		if (num1 > 0) positive++
		if (num2 > 0) positive++
		if (num3 > 0) positive++
		return positive
	}

	function getOver100Numbers(num1, num2, num3) {
		let over100 = 0
		if (num1 > 100) over100++
		if (num2 > 100) over100++
		if (num3 > 100) over100++
		return over100
	}

	const userNum1 = parseInt(prompt(`Введіть число`))
	const userNum2 = parseInt(prompt(`Введіть число`))
	const userNum3 = parseInt(prompt(`Введіть число`))

	const evenNumbers = getEvenNumbers(userNum1, userNum2, userNum3)
	const positiveNumbers = getPositiveNumbers(userNum1, userNum2, userNum3)
	const Over100Numbers = getOver100Numbers(userNum1, userNum2, userNum3)

	document.write(`Число №1:${userNum1} Число №2:${userNum2} Число №3:${userNum3}<br>
		Парних: ${evenNumbers}<br>
	Додатніх: ${positiveNumbers}<br>
Більших за 100: ${Over100Numbers}
`)
}