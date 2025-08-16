if (confirm('Почати тестування?')) {


	function weekDays(num) {
		let dayArr
		switch (num) {
			case 1: dayArr = 'Понеділок'
				break;
			case 2: dayArr = 'Вівторок'
				break;
			case 3: dayArr = 'Середа'
				break;
			case 4: dayArr = 'Четвер'
				break;
			case 5: dayArr = 'П\'ятниця'
				break;
			case 6: dayArr = 'Субота'
				break;
			case 7: dayArr = 'Неділя'
				break;
			default: throw new Error("Немає такого варіанту")
		}
		return dayArr
	}

	function getWeekDaysNameList(numbers) {
		if (!Array.isArray(numbers)) {
			return weekDays(numbers)
		} else {

			let dayName = []
			for (let i = 0; i < numbers.length; i++) {
				const name = weekDays(numbers[i])
				dayName.push(name)
			}
			return dayName
		}
	}


	function inputVisitorsNumber() {
		const visitorsNumberWeek = []
		for (let i = 1; i <= 7; i++) {
			const visitorsNumber = parseInt(prompt(`Ведіть кількість відвідувачів за ${i} день`))
			if(isNaN(visitorsNumber) || visitorsNumber < 0) 
				{alert('Не правильне значення!')
				i--
			}
			else visitorsNumberWeek.push(visitorsNumber)
		}
		return visitorsNumberWeek
	}


	function getVisitorsNumberLess20(arr) {
		let less20 = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < 20) less20.push(i + 1)
		}
		return less20
	}

	function getVisitorsNumberMin(arr) {
		let minValue = arr[0]
		let minVisitorsDay = 1
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < minValue) {
				minValue = arr[i]
				minVisitorsDay = i + 1
			}
		}
		return minVisitorsDay
	}


	function getVisitorsNumberMax(arr) {
		let maxValue = arr[0]
		let maxVisitorsDay = 1
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > maxValue) {
				maxValue = arr[i]
				maxVisitorsDay = i + 1
			}
		}
		return maxVisitorsDay
	}

	function getSumVisitorsNumberWeekDays(arr) {
		let sum = 0
		for (let i = 0; i < 5; i++) {
			sum += arr[i]
		}
		return sum
	}

	function getSumVisitorsNumberWeekEnd(arr) {
		let sum = 0
		for (let i = 5; i < 7; i++) {
			sum += arr[i]
		}
		return sum
	}

	const visitorsNumberList = inputVisitorsNumber()

	const less20 = getVisitorsNumberLess20(visitorsNumberList)
	const min = getVisitorsNumberMin(visitorsNumberList)
	const max = getVisitorsNumberMax(visitorsNumberList)
	const sumWeekDays = getSumVisitorsNumberWeekDays(visitorsNumberList)
	const sumWeekEnd = getSumVisitorsNumberWeekEnd(visitorsNumberList)


	document.write(`Менше 20 в такі дні: ${less20} (${getWeekDaysNameList(less20)})<br>
		Мінімум був в ${min}-й день: (${getWeekDaysNameList(min)})<br>
		Максимум був в ${max}-й день: (${getWeekDaysNameList(max)})<br>
		Сума покупців у будні дні: ${sumWeekDays}
		<br>
		Сума покупців у вихідні дні: ${sumWeekEnd}
		`)

}
