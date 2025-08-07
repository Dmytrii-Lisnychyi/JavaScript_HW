if (confirm('Почати тестування?')) {
	let currentNumber = 1;

	for (let table = 1; table <= 3; table++) {
		document.write(`<table border="2" style="display:inline-block">`)
		for (let row = 1; row <= 3; row++) {
			document.write(`<tr>`)
			for (let col = 1; col <= 3; col++) {
				document.write(`<td>${currentNumber}</td>`)
				currentNumber++
			}
			document.write(`</tr>`)
		}
		document.write(`</table> `)
	}
}