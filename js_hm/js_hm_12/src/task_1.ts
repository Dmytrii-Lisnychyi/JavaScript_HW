if (confirm('Почати тестування?')) {

	const getRandomRow = (elCount: number, min: number, max: number): number[] =>
		Array.from(
			{ length: elCount },
			() => min + Math.floor(Math.random() * (max - min + 1))
		)

	const getRandMatrix = (rowCount: number, colCount: number, min: number, max: number): number[][] =>
		Array.from(
			{ length: rowCount },
			() => getRandomRow(colCount, min, max)
		)

	const randMatrix: number[][] = getRandMatrix(3, 7, 50, 500)

	document.write(`<div style="margin-bottom: 20px; font-size: 25px">
		${randMatrix.map((row: number[]) => `[${row.join(' / ')}]`).join('<br>')}
	</div>`);

	console.log(randMatrix);

	// 1) Загальний прибуток кожного магазину за тиждень

	let shopNum: number = 0
	for (const shop of randMatrix) {
		let sum: number = 0
		for (const profit of shop) {
			sum += profit
		}
		shopNum++
		document.write(`Магазин №${shopNum} заробив ${sum}грн<br>`);
	}

	// 2) Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

	function getDayName(value: number): string {
		let dayName: string
		switch (value) {
			case 1: dayName = 'Понеділок'; break;
			case 2: dayName = 'Вівторок'; break;
			case 3: dayName = 'Середа'; break;
			case 4: dayName = 'Четвер'; break;
			case 5: dayName = 'П\'ятниця'; break;
			case 6: dayName = 'Субота'; break;
			case 7: dayName = 'Неділя'; break;
			default: dayName = 'Де я'; break;
		}
		return dayName
	}

	const dayName: string[] = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя']

	for (let dayIndex: number = 0; dayIndex < randMatrix[0].length; dayIndex++) {
		let daySum: number = 0
		for (let shopIndex: number = 0; shopIndex < randMatrix.length; shopIndex++) {
			daySum += randMatrix[shopIndex][dayIndex]
		}
		document.write(`${dayName[dayIndex]}: ${daySum}грн<br>`);
	}

	// 3) Загальний прибуток за робочі дні

	let totalProfitSum: number = 0
	for (let dayIndex: number = 0; dayIndex < 5; dayIndex++) {
		for (const shop of randMatrix) {
			totalProfitSum += shop[dayIndex]
		}
	}
	document.write(`totalSum: ${totalProfitSum}грн<br>`);

	// 4) Загальний прибуток за вихідні дні

	let weekendProfitSum: number = 0
	for (let dayIndex: number = 5; dayIndex < randMatrix[0].length; dayIndex++) {
		for (const shop of randMatrix) {
			weekendProfitSum += shop[dayIndex]
		}
	}
	document.write(`weekendProfitSum: ${weekendProfitSum}грн<br>`);

	// 5) Максимальний прибуток за середу

	let wednesdayProfitMax: number = 0
	const wednesdayIndex: number = dayName.indexOf('Середа')

	for (const shop of randMatrix) {
		wednesdayProfitMax += shop[wednesdayIndex]
	}

	document.write(`weekendProfitSum: ${wednesdayProfitMax}грн<br>`);

	// 6) Cформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

	const arrMoreThan200: number[] = randMatrix
		.flatMap((row: number[]) => row.filter((e: number) => e > 200))

	document.write(`arrMoreThan200: [${arrMoreThan200}]<br>`);

	// 7) Відсортувати кожен тиждень за зростанням

	for (const shop of randMatrix) {
		const sortShop: number[] = shop.sort((a: number, b: number) => a - b)
		document.write(`[${sortShop}]<br>`);
	}

	//8) Відсортувати тижні (рядки) за спаданням максимального елемента у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

	for (const row of randMatrix) {
		let maxProfitOfWeek: number[] = row.sort((a: number, b: number) => a - b < 0 ? 1 : -1)
		document.write(`[${maxProfitOfWeek}]<br>`);
	}

	//9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

	const maxProfitShopSort: number[] = randMatrix
		.flatMap((row: number[]) => row.reduce((prevSum: number, currNum: number) => prevSum + currNum, 0))
		.sort((a: number, b: number) => a - b < 0 ? 1 : -1)

	document.write(`[${maxProfitShopSort}]<br>`);
}
