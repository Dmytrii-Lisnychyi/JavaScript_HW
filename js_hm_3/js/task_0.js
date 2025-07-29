const firstChild = String(prompt('Введіть ім\'я першої дитини', ''))
const candyFirstChilds = parseInt(prompt('Введіть кількість цукерок у першої дитини'))

const secondСhild = String(prompt('Введіть ім\'я другої дитини', ''))
const candySecondСhilds = parseInt(prompt('Введіть кількість цукерок у другої дитини'))


if (candyFirstChilds > candySecondСhilds)
	document.write(`У дитини на ім'я ${firstChild} більше цукерок: ${candyFirstChilds}`)
else {
	if (candySecondСhilds > candyFirstChilds)
		document.write(`У дитини на ім'я ${secondСhild} більше цукерок: ${candySecondСhilds}`)
	else
		document.write(`У ${firstChild} та ${secondСhild} порівну цукерок: ${candySecondСhilds}`)
}

