if (confirm('Почати тестування?')) {
	// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.


	type Date = {
		day: number,
		month: number,
		year: number
	}

	const date:Date ={
		day: 12,
		month: 3,
		year: 2020
	}


	function getYearInN({year ,month}:Date, N:number) {
		return (Math.floor((month-1+N)/12)+year)
	}

	console.log(getYearInN(date, 40));
}
