// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

let userBithdYear = parseInt(prompt('Введіть рік', '1999'))

const currentYear = 2025

const userAge = currentYear - userBithdYear


document.write(
	`
	Користувачу ${userAge} років
	`
)