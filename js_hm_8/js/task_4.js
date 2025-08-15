if (confirm('Почати тестування?')) {
	function convertCentimetersToInches(centimeters) {
		let inches = centimeters * 0.393701
		return inches
	}

	function convertKilogramsToPounds(kilograms) {
		let pounds = kilograms * 2.20462
		return pounds
	}

	function convertKilometersToMiles(kilometers) {
		let miles = kilometers * 0.621371
		return miles
	}

	const getResult = () => {
		let result

		switch (userAnswear) {
			case 1: result = `${userNumber} cm = ${inch} inch!`
				break;
			case 2: result = `${userNumber} kg = ${pound} pound!`
				break;
			case 3: result = `${userNumber} km = ${miles} miles!`
				break;
		}
		return result
	}


	const userAnswear = parseInt(prompt('Що ви хочете обчислити?\n1) Сантиметри в дюйми.\n2) Кілограми в фунти.\n3) Кілометри в милі.'))

	if (userAnswear < 1 || userAnswear > 3 || isNaN(userAnswear)) {
		throw new Error("Немає такого варіанту");
	}

	const userNumber = parseFloat(prompt('Введіть значення'))

	if (isNaN(userNumber) || userNumber <= 0) {
		alert('Невірне значення')
		throw new Error("Невірне значення");
	}

	const inch = convertCentimetersToInches(userNumber).toFixed(2)
	const pound = convertKilogramsToPounds(userNumber).toFixed(2)
	const miles = convertKilometersToMiles(userNumber).toFixed(2)

	document.write(`
			<div style = "display: inline-block; padding:5px 10px; margin: 50px 0 50px 0;font-size: 50px; font-weight: 600; border: 5px solid orange;">${getResult()}</div>
		`)
}