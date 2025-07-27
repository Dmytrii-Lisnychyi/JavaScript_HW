let lengthCm = parseInt(prompt('Введіть довжину в СМ', '0'))

const lengthM = lengthCm / 100
const lengthKm = lengthCm / 1000

document.write(
	`
	Довжина в метрах: ${lengthM} м <br>
	Довжина в сантиметрах: ${lengthKm} см
	`
)