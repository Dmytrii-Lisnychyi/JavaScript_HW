if (confirm('Почати тестування?')) {
	const MIN_RANDOM_VALUE = 1, MAX_RANDOM_VALUE = 1000

	let evenNumbers = 0
	let oddNumbers = 0

	for (let num = 1; num <= 100; num++) {
		const randomNumber = 1 + Math.floor(Math.random()*(MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1))

		document.write(`Число №${num}: ${randomNumber}`)
		
		if(randomNumber % 2 === 0) 
			evenNumbers++
		else oddNumbers++
	}

		document.write(`Парних чисел: ${evenNumbers}`)
		document.write(`Непарних чисел: ${oddNumbers}`)
}