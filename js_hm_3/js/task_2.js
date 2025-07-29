const randomNumber = Math.floor(Math.random() * 5) + 1;

const firstGuess = parseInt(prompt('Вгадайте число від 1 до 5. Спроба 1', ''))


if (firstGuess === randomNumber){
	document.write(`ВИ ВГАДАЛИ! Це число ${randomNumber}.`)
}
else {
	alert('Нажаль ви не вгадали, спробуйте ще.')
	const	secondGuess = parseInt(prompt('Вгадайте число від 1 до 5. Спроба 2', ''))
	if(secondGuess === randomNumber)
		document.write(`Ви вгадали! Це число ${randomNumber}.`)
	else document.write(`Нажаль ви не вгадали! Це було число ${randomNumber}.`)
}

