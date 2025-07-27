let userBithdYear = parseInt(prompt('Введіть рік', '1999'))

const currentYear = 2025
const userAge = currentYear - userBithdYear


document.write(
	`
	Користувачу ${userAge} років
	`
)