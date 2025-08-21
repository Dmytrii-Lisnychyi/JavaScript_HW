if (confirm('Почати тестування?')) {
	function displaysTable(row = 10, col = 5) {
		const message = 'Hello!'

		document.write(`<table style = "border: 1px solid #000;">`)
		for (let r = 1; r <= row; r++) {
			document.write(`<tr>`)
			for (let c = 1; c <= col; c++) {
				document.write(`<td style = "border: 1px solid #000;">${message}</td>`)
			}
			document.write(`</tr>`)
		}
		document.write(`</table>`)
	}

	const userRow = parseInt(prompt('Введіть кількість рядків', '3'))
	const userCol = parseInt(prompt('Введіть кількість колонок', '5'))

	displaysTable(userRow, userCol)
}