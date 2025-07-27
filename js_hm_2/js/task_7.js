// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

let month = Math.floor(Math.random() * 12) + 1;
let num = Math.floor(Math.random() * 6) + 1;

const sum = month + num

document.write(
	`
	Сума = ${sum}
	`
)