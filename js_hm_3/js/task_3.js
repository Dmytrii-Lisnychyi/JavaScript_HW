const userAge = parseFloat(prompt('Введіть ваш вік', '18'))

if (userAge < 6 && userAge >= 2)
	document.write(`Ви малюк`)
else {
	if (userAge <= 18)
		document.write(`Ви школяр`)
	else {
		if (userAge <= 23)
			document.write(`Ви студент`)
		else {
			if (userAge <= 65)
				document.write(`Ви працівник`)
			else document.write(`Ви пенсія`)
		}
	}
}