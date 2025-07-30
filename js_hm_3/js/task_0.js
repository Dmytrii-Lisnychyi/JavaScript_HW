const firstChild = prompt('Введіть ім\'я першої дитини', 'Дмитро')
const candyFirstChilds = parseInt(prompt('Введіть кількість цукерок у першої дитини'))

const secondСhild = prompt('Введіть ім\'я другої дитини', 'Іван')
const candySecondСhilds = parseInt(prompt('Введіть кількість цукерок у другої дитини'))


if (candyFirstChilds > candySecondСhilds)
	document.write(`У дитини на ім'я ${firstChild} більше цукерок: ${candyFirstChilds}`)
else {
	if (candySecondСhilds > candyFirstChilds)
		document.write(`У дитини на ім'я ${secondСhild} більше цукерок: ${candySecondСhilds}`)
	else
		document.write(`У ${firstChild} та ${secondСhild} порівну цукерок: ${candyFirstChilds}`)
}

