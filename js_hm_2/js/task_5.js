let seconds = parseInt(prompt('Введіть кількість секунд', '0'))

const hour = seconds / 60^2
const minute = seconds / 60

document.write(
	`
	Години: ${hour} <br>
	Хвилини: ${minute}
	`
)