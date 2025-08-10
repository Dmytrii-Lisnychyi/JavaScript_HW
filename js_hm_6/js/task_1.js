if (confirm('Почати тестування?')) {
	const numberOfVisitors = parseInt(prompt(`Введіть кількість відвідувачів`, '3'))

	let totalAge = 0
	let youngest = Infinity
	let oldest = -Infinity

	for (let i = 1; i <= numberOfVisitors; i++) {
		let ageOfVisitor = parseInt(prompt(`Введіть вік ${i} відвідувача`, '24'))

		if (isNaN(ageOfVisitor)) {
			alert("Введено неправильне значення віку!")
			i-- 
			continue
		}else if (ageOfVisitor > 150){
			alert("Не застарий для всього цього?")
			i-- 
			continue
		}

		totalAge += ageOfVisitor
		if (ageOfVisitor < youngest) youngest = ageOfVisitor
		if (ageOfVisitor > oldest) oldest = ageOfVisitor
	}

	const middleAge = totalAge / numberOfVisitors

	document.write(`Наймолодший: ${youngest}<br>
	Найстаріший: ${oldest}<br>
	Середній вік: ${Math.round(middleAge)}`)
}
