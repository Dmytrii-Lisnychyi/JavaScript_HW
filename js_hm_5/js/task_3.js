if (confirm('Почати тестування?')) {
	document.write(`<table border="1">`)
	for (let num = 1; num <= 3; num++) {
		document.write(`<tr>`)
		for (let num2 = 1; num2 <= 7; num2++) {
			document.write(`<td>${num2}</td>`)
		}
		document.write(`</tr>`)
	}
	document.write(`</table>`)
}