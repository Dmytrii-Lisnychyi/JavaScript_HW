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


const userAnswear = parseInt(prompt('Що ви хочете обчислити?\n1) Сантиметри в дюйми.\n2) Кілограми в фунти.\n3) Кілометри в милі.'))

if (userAnswear < 1 || userAnswear > 3 || isNaN(userAnswear)) {
	throw new Error("Немає такого варіанту");
}

const userNumber = parseFloat(prompt('Введіть значення'))



let result

switch (userAnswear) {
	case 1: result = `Це ${convertCentimetersToInches(userNumber).toFixed(2)} дюймів!`
		break;
	case 2: result = `Це ${convertKilogramsToPounds(userNumber).toFixed(2)} фунтів!`
		break;
	case 3: result = `Це ${convertKilometersToMiles(userNumber).toFixed(2)} миль!`
		break;
}

document.write(result)
