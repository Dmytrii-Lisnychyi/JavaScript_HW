let seconds = parseInt(prompt('Введіть кількість секунд', '0'))

const minute = seconds / 60
const hour = minute / 60

document.write(
	`
	Години: ${hour} <br>
	Хвилини: ${minute}
	`
)
