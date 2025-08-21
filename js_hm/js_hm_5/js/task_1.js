if (confirm('Почати тестування?')) {
const requiredRandomNumbers = parseFloat(prompt('Кількість випадкових чисел', '6'))

	const MIN_RANDOM_VALUE = 1, MAX_RANDOM_VALUE = 100

	document.write(`<ul>`)
	for (let num = 1; num <= requiredRandomNumbers; num++) {
		const randomNumber = 1 + Math.floor(Math.random()*(MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1))

		document.write(`<li> ${randomNumber}</li>`)
	}
	document.write(`</ul>`)
}