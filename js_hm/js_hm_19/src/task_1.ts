if (confirm('Почати тестування?')) {
	const wishList = [
		'Подорож до Японії',
		'Вивчити нову мову',
		'Купити велосипед',
		'Прочитати 20 книг',
		'Навчитися грати на гітарі',
		'Зробити ремонт у кімнаті',
		'Піти на концерт улюбленої групи',
		'Спробувати дайвінг',
		'Відвідати музей сучасного мистецтва',
		'Завести домашнього улюбленця'
	]

	function getRandomNum(min: number, max: number) {
		return Math.floor(Math.random() * (max - min) + min)
	}

	window.onload = function () {


		function displayRandomWish(wishArr: string[], number: number, randomNumber: Function) {
			const body = document.querySelector('.main__body')

			for (let i = 0; i < number; i++) {
				const randomWish = wishArr[randomNumber(0, wishArr.length)]
				const div = document.createElement('div')
				div.innerText = randomWish
				body?.append(div)
			}
		}

		displayRandomWish(wishList, 3, getRandomNum)
	}
}