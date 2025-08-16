if (confirm('Почати тестування?')) {

	function getSumPayments(pay, param1, param2, monthName) {
		let sum = 0
		let month = []
		for (let i = param1; i < param2; i++) {
			if (monthName) {
				month.push(monthName[i])
				sum += pay[i]
			}
			else sum += pay[i]
		}
		return monthName ? sum.toFixed(2) + ' грн ' + `(${month})` : sum.toFixed(2) + ' грн '
	}

	function getSumEvenMonth(pay, param1, param2, monthName) {
		let evenSum = 0
		let evenMonths = []
		for (let i = param1; i < param2; i += 2) {
			evenSum += pay[i]
			evenMonths.push(monthName[i])
		}
		return monthName ? evenSum.toFixed(2) + ' грн ' + `(${evenMonths})` : evenSum.toFixed(2) + ' грн '
	}

	function getInitialInTheSeason(pay, param1, param2, monthName) {
		let initialSum = 0
		let initialMonths = []
		for (let i = param1; i < param2; i += 3) {
			initialSum += pay[i]
			initialMonths.push(monthName[i])
		}
		return monthName ? initialSum.toFixed(2) + ' грн ' + `(${initialMonths})` : initialSum.toFixed(2) + ' грн '
	}


	const paymentsList = [3150, 2620.55, 2200.32, 1757, 1476.65, 1505.35, 1650, 1520.55, 1460.32, 1857.76, 2076.65, 2805.35]
	const monthNamesList = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']


	const totalSum = getSumPayments(paymentsList, 0, 12)
	const firstHalf = getSumPayments(paymentsList, 0, 6, monthNamesList)
	const secondHalf = getSumPayments(paymentsList, 6, 12, monthNamesList)
	const forTheSummer = getSumPayments(paymentsList, 5, 8, monthNamesList)
	const quarter = getSumPayments(paymentsList, (12 / 4 * 2) - 3, (12 / 4 * 2), monthNamesList)
	const even = getSumEvenMonth(paymentsList, 1, 12 , monthNamesList)
	const initial = getInitialInTheSeason(paymentsList, 2, 12 , monthNamesList)
	

	document.write(`Загальна сума = ${totalSum}<br>
		Перша половина = ${firstHalf}<br>
		Друга половина = ${secondHalf}<br>
		За літо = ${forTheSummer}<br>
		За 2 кватрал = ${quarter}<br>
		За парні місяці = ${even}<br>
		За місяці яки починають сезон = ${initial}
		`)
}
