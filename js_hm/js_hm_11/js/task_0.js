if (confirm('Почати тестування?')) {
	const getRandomRow = (elCount, min, max) =>
		Array.from(
			{ length: elCount },
			() => min + Math.floor(Math.random() * (max - min + 1))
		)

	const getRandMatrix = (rowCount, colCount, min, max) =>
		Array.from(
			{ length: rowCount },
			() => getRandomRow(colCount, min, max)
		)

	const randMatrix = getRandMatrix(6, 6, 1, 10)

	for (const row of randMatrix) {
		document.write(`<div>
				<span>[</span>${row.join('_')}<span>]</span><br>
				</div>
				`);
	}

	console.log(randMatrix);


	//1) Номери рядків від 0 до половини, стовпці від 0 до половини

	const halfRow = Math.floor(randMatrix.length / 2)
	let sum = 0
	for (let rowIndex = 0; rowIndex < halfRow; rowIndex++) {
		const halfCol = Math.floor(randMatrix[rowIndex].length / 2)
		for (let colIndex = 0; colIndex < halfCol; colIndex++) {
			sum += randMatrix[rowIndex][colIndex]
			document.write(`[${randMatrix[rowIndex][colIndex]}]`);
		}
	}

	// const sum = randMatrix
	// 	.flatMap((row, rowIndex, baseArrRef) =>
	// 		rowIndex < baseArrRef.length / 2 ? row.slice(0, row.length / 2) : []
	// 	)
	// 	.reduce((a, b) => a + b, 0)

	document.write(`Sum1 = ${sum}<br>`);

	//=====================================================================

	//2) Номери рядків від 0 до половини, стовпці від половини до кінця


	let sum2 = 0
	for (let rowIndex = 0; rowIndex < halfRow; rowIndex++) {
		const halfCol = Math.floor(randMatrix[rowIndex].length / 2)
		for (let colIndex = halfCol; colIndex < randMatrix[rowIndex].length; colIndex++) {
			sum2 += randMatrix[rowIndex][colIndex]
			document.write(`[${randMatrix[rowIndex][colIndex]}]`);
		}
	}

	// const sum2 = randMatrix
	// 	.flatMap((row, rowIndex, baseArrRef) =>
	// 		rowIndex < baseArrRef.length / 2 ? row.slice(row.length / 2, row.length) : []
	// 	)
	// 	.reduce((a, b) => a + b, 0)

	document.write(`Sum2 = ${sum2}<br>`);

	//=====================================================================

	//3) Номери рядків (від половини до кінця, стовпці від 0 до половини


	let sum3 = 0
	for (let rowIndex = halfRow; rowIndex < randMatrix.length; rowIndex++) {
		const halfCol = Math.floor(randMatrix[rowIndex].length / 2)
		for (let colIndex = 0; colIndex < halfCol; colIndex++) {
			sum3 += randMatrix[rowIndex][colIndex]
			document.write(`[${randMatrix[rowIndex][colIndex]}]`);
		}
	}
	document.write(`Sum3 = ${sum3}<br>`);

	//=====================================================================

	//4) Номери рядків від половини до кінця , стовпці від половини до кінця

	let sum4 = 0
	for (let rowIndex = halfRow; rowIndex < randMatrix.length; rowIndex++) {
		const halfCol = Math.floor(randMatrix[rowIndex].length / 2)
		for (let colIndex = halfCol; colIndex < randMatrix[rowIndex].length; colIndex++) {
			sum4 += randMatrix[rowIndex][colIndex]
			document.write(`[${randMatrix[rowIndex][colIndex]}]`);
		}
	}
	document.write(`Sum4 = ${sum4}<br>`);

	//=====================================================================

	//5) Суму парних рядків


	const sumEven = randMatrix
		.filter((_, i) => i % 2 !== 0)
		.flat()
		.reduce((a, b) => a + b)
	document.write(`sumEven = ${sumEven}<br>`);

	//=====================================================================

	//6) Суму непарних стовпців

	const sumOdd = randMatrix
		.filter((_, i) => i % 2 === 0)
		.flat()
		.reduce((a, b) => a + b)
	document.write(`sumOdd = ${sumOdd}<br>`);


	//=====================================================================

	//6) У парних рядках – непарні стовпці, у непарних – парні

	let sumRowEvenColOdd = 0
	for (let rowIndex = 0; rowIndex < randMatrix.length; rowIndex++) {
		const row = randMatrix[rowIndex]
		if (rowIndex % 2 === 0) {
			for (let colIndex = 0; colIndex < row.length; colIndex++) {
				if (colIndex % 2 !== 0) sumRowEvenColOdd += row[colIndex]
			}
		} else {
			for (let colIndex = 0; colIndex < row.length; colIndex++) {
				if (colIndex % 2 === 0) sumRowEvenColOdd += row[colIndex]
			}
		}
	}

	// const sumRowEvenColOdd = randMatrix
	// 	.map((row, rowIndex) =>
	// 		row.filter((_, colIndex) =>
	// 			rowIndex % 2 === 0 ? colIndex % 2 !== 0 : colIndex % 2 === 0)
	// 	)
	// 	.flat()
	// 	.reduce((a, b) => a + b, 0)

	document.write(`sumRowEvenColOdd = ${sumRowEvenColOdd}<br>`);
}
