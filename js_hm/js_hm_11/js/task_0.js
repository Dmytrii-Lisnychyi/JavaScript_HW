if (confirm('Почати тестування?')) {
	const getRandomRow = (elCount, min, max) =>
		Array.from(
			{ length: elCount },
			() => min + Math.floor(Math.random() * (max - min + 1))
		)

	const getRandMatrix = (rowCount, colCount, min, max) =>
		Array.from({ length: rowCount }, () => getRandomRow(colCount, min, max))

	const randMatrix = getRandMatrix(4, 4, 1, 5)

	console.log(randMatrix);

	document.write(`<div style="margin-bottom:20px; font-size:50px; color: #740000;">
			[]
		</div>`)

	const halfRow = Math.floor(randMatrix.length / 2)
	let sum = 0
	for (let rowIndex = 0; rowIndex < halfRow; rowIndex++) {
		for (let colIndex = 0; colIndex < randMatrix[rowIndex].length / 2; colIndex++) {
			sum += randMatrix[rowIndex][colIndex]
		}
	}
	document.write(`
		<div">
			<p style="font-size:30px;">
			1) Номери рядків від 0 до половини, стовпці від 0 до половини
			</p>
			<div style="font-size:30px; color: #740000;">
				Сума: [${sum}]<br>
			</div>
		</div>
		`)


	let sum2 = 0
	for (let rowIndex = 0; rowIndex < halfRow; rowIndex++) {
		const halfCol = Math.floor(randMatrix[rowIndex].length / 2)
		for (let colIndex = halfCol; colIndex < randMatrix[rowIndex].length; colIndex++) {
			sum2 += randMatrix[rowIndex][colIndex]
		}
	}
	document.write(`
		<div">
			<p style="font-size:30px;">
			2) Номери рядків від 0 до половини, стовпці від половини до кінця
			</p>
			<div style="font-size:30px; color: #740000;">
				Сума: [${sum2}]<br>
			</div>
		</div>
		`)


	let sum3 = 0
	for (let rowIndex = halfRow; rowIndex < randMatrix.length; rowIndex++) {
		const row = randMatrix[rowIndex]
		sum3 += row.slice(0, Math.floor(row.length / 2))
			.reduce((prevSum, currentEl) => prevSum + currentEl, 0)
	}

	document.write(`
		<div">
			<p style="font-size:30px;">
			3) Номери рядків від половини до кінця, стовпці від 0 до половини
			</p>
			<div style="font-size:30px; color: #740000;">
				Сума: [${sum3}]<br>
			</div>
		</div>
		`)

	let sum4 = 0
	for (let rowIndex = halfRow; rowIndex < randMatrix.length; rowIndex++) {
		const row = randMatrix[rowIndex]
		sum4 += row.slice(Math.floor(row.length / 2))
			.reduce((prevSum, currentEl) => prevSum + currentEl, 0)
	}

	document.write(`
		<div">
			<p style="font-size:30px;">
			4) Номери рядків від половини до кінця, стовпці від половини до кінця
			</p>
			<div style="font-size:30px; color: #740000;">
				Сума: [${sum4}]<br>
			</div>
		</div>
		`)

	// let sum5 = 0
	// for (let i = 0; i < randMatrix.length; i++) {
	// 	if (i % 2 !== 0) sum5 += randMatrix[i].reduce((prevSum, currNum) => prevSum + currNum,0)
	// }

	const even = randMatrix
		.filter((_, i) => i % 2 !== 0)
		.flat()
		.reduce((a, b) => a + b, 0);

	document.write(`
		<div">
			<p style="font-size:30px;">
			5) Сума парних рядків
			</p>
			<div style="font-size:30px; color: #740000;">
				Сума: [${even}]<br>
			</div>
		</div>
		`)

	const odd = randMatrix
		.filter((_, i) => i % 2 === 0)
		.flat()
		.reduce((a, b) => a + b, 0);

	document.write(`
		<div">
			<p style="font-size:30px;">
			5) Сума непарних рядків
			</p>
			<div style="font-size:30px; color: #740000;">
				Сума: [${odd}]<br>
			</div>
		</div>
		`)
	let result = 0
	for (let i = 0; i < randMatrix.length; i++) {
		let evenRowOddCol = 0
		let oddRowEvenCol = 0
		if (i % 2 !== 0) {
			evenRowOddCol = randMatrix[i]
				.filter((_, i) => i % 2 === 0)
				.reduce((a, b) => a + b, 0)
		}
		if (i % 2 === 0) {
			oddRowEvenCol = randMatrix[i]
				.filter((_, i) => i % 2 !== 0)
				.reduce((a, b) => a + b, 0)
		}
		result += evenRowOddCol + oddRowEvenCol
	}

	// const result = randMatrix
	// 	.flatMap((row, i) =>
	// 		i % 2 === 0
	// 			? row.filter((_, j) => j % 2 !== 0)   // парний рядок → непарні стовпці
	// 			: row.filter((_, j) => j % 2 === 0)   // непарний рядок → парні стовпці
	// 	)
	// 	.reduce((sum, num) => sum + num, 0);

	document.write(`
		<div">
			<p style="font-size:30px;">
			5) Сума у парних рядках непарних 
			</p>
			<div style="font-size:30px; color: #740000;">
				Сума: [${result}]<br>
			</div>
		</div>
		`)
	const res = 3 % 2
	console.log(res);
}
