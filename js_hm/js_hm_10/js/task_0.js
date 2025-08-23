if (confirm('Почати тестування?')) {
	document.write(`<div style="font-size: 20px; line-height: 1.3" >`);

	function getRandomNum(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}
	function getPriceHistory(randomNum, min, max, arrSize) {
		let arr = new Array(arrSize)
		for (let i = 0; i < arr.length; i++) {
			const r = randomNum(min, max)
			arr[i] = r
		}
		return arr
	}

	const userSizePriceList = parseFloat(prompt('Введіть кількість цін'))

	const randomPriceHistory = getPriceHistory(getRandomNum, 1, 2000, userSizePriceList)

	document.write(`<div style="font-size: 40px; margin-bottom: 20px; ">Історія цін на цінні папери: <div style ="font-size: 30px; color: #ad0000">[${randomPriceHistory.join(', ')}]</div></div>`);


   // 1) Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

	const priceMoreThan1000 = randomPriceHistory.filter(el => el > 1000)

	document.write(`Ціни більше за 1000: [${priceMoreThan1000}]<br>`);


	// 2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн

	const priceIndexMoreThat1000 = randomPriceHistory
		.map((el, i) => el > 1000 ? i : null)
		.filter((el) => el !== null)

	document.write(`Індекси цін більше за 1000: [${priceIndexMoreThat1000.join(', ')}]<br>`);


	// 3) Сформувати список з тих цін, які більші за попереднє значення

	let previousOnes = randomPriceHistory[0]
	const pricesAreHigherThanPreviousOnes = []

	for (let i = 0; i < randomPriceHistory.length; i++) {
		if (previousOnes < randomPriceHistory[i]) {
			pricesAreHigherThanPreviousOnes.push(randomPriceHistory[i])
			previousOnes = randomPriceHistory[i]
		}
	}

	document.write(`Ціни які більші за попередні: [${pricesAreHigherThanPreviousOnes.join(', ')}]<br>`);


	//4) Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

	const max = randomPriceHistory.reduce((a, b) => a > b ? a : b, -Infinity)
	const pricesInPercentages = randomPriceHistory.map(el => Number(((el / max) * 100).toFixed(2)))

	document.write(`Ціни у відсотках відносно максимальної: [${pricesInPercentages.join(', ')}]<br>`);


	//5) Підрахувати кількість змін цін

	const numberChangePrices = randomPriceHistory.reduce((prevNum, price, i, baseArrRef) => i > 0 && price !== baseArrRef[i - 1] ? prevNum + 1 : prevNum, 0)

	document.write(`Кількість змін цін: [${numberChangePrices}]<br>`);


	//6) Визначити, чи є ціна, що менше 1000

	const priceLess1000 = randomPriceHistory.some(el => el < 1000)

	document.write(`Чи є ціна менше 1000: [${priceLess1000 ? 'Є ціна менше 1000' : 'Немає ціни менше 1000'}]<br>`);


	//7) Визначати, чи усі ціни більше за 1000

	const pricesOver1000 = randomPriceHistory.every(el => el > 1000)
	document.write(`Чи всі ціни більше 1000: [${pricesOver1000 ? 'Всі ціни більше 1000' : 'Є ціни які менше 1000'}]<br>`);


	//8) Підрахувати кількість цін, що більше за 1000

	const numberPricesOver1000 = randomPriceHistory.reduce((number, price) => price > 1000 ? number + 1 : number, 0)
	document.write(`Кількість цін білше за 1000: [${numberPricesOver1000}]<br>`);


	//9) Підрахувати суму цін, що більше за 1000

	const sumPricesOver1000 = randomPriceHistory.reduce((sum, price) => price > 1000 ? sum + price : sum, 0)
	document.write(`Сума цін білше за 1000: [${sumPricesOver1000}]<br>`);

	
	//10) Знайти першу ціну, що більше за 1000

	const firstPriceOver1000 = randomPriceHistory.find(el => el > 1000)
	document.write(`Перша ціна більша за 1000: [${firstPriceOver1000}]<br>`);


	//11) Знайти індекс першої ціни, що більше за 1000

	const firstPriceOver1000Index = randomPriceHistory.findIndex(el => el > 1000)
	document.write(`Індекс першої ціни більшої за 1000: [${firstPriceOver1000Index}]<br>`);


	//12) Знайти останню ціну, що більше за 1000

	const lastPriceOver1000 = randomPriceHistory.findLast(el => el > 1000)
	document.write(`Остання ціна більша за 1000: [${lastPriceOver1000}]<br>`);


	//13) Знайти індекс останньої ціни, що більше за 1000

	const lastPriceOver1000Index = randomPriceHistory.findLastIndex(el => el > 1000)
	document.write(`Індекс останньої ціни більшої за 1000: [${lastPriceOver1000Index}]<br>`);

	document.write(`</div>`);
	
}