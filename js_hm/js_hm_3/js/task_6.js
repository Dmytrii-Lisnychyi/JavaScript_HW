const monthNumber = parseInt(prompt('Введіть номер місяця', '4'))

if (monthNumber > 0 && monthNumber <= 2 || monthNumber == 12)
	document.write(`Зима`)
else {
	if (monthNumber <= 5)
		document.write(`Весна`)
	else {
		if (monthNumber <= 8)
			document.write(`Літо`)
		else {
			if (monthNumber <= 11)
				document.write(`Осінь`)
			else document.write(`Хтозна шо`)
		}
	}
}