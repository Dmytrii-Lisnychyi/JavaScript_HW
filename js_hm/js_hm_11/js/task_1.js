if (confirm('Почати тестування?')) {
	const getRandomRow = (elCount, min, max) =>
		Array.from(
			{ length: elCount },
			() => min + Math.floor(Math.random() * (max - min + 1))
		)

	const getRandMatrix = (rowCount, colCount, min, max) =>
		Array.from({ length: rowCount }, () => getRandomRow(colCount, min, max))

	const randMatrix = getRandMatrix(4, 7, 500, 2000)

	console.log(randMatrix);

	document.write(`<h2 style="color: #740000;">
		1)З агальний прибуток кожного масиву за тиждень 
		</h2>`)

	randMatrix.forEach((shops, index) => {
		let profit = 0
		for (const el of shops) {
			profit += el
		}
		document.write(`
			<div>Магазин №${index + 1} заробив ${profit}грн</div><br>`)
	})


	document.write(`<h2 style="color: #740000;">
		1)Загальний прибуток за кожен день всіх магазинів
		</h2>`)

		for (let i = 0; i < randMatrix.length; i++) {
			
		}
		document.write(`
			<div>Магазин №${index + 1} заробив ${profit}грн</div><br>`)

}