if (confirm('Почати тестування?')) {
	const height = parseInt(prompt(`Введіть висоту`, '6'))
	
	document.write(`<div style="white-space: pre;">`)
	for (let i = 1; i <= height; i++) {
		let length = ''
		for (let a = 1; a <= height - i; a++) {
			length += '  '
		}
		for (let b = 1; b <= 2 * i - 1; b++) {
			length += '^'
		}
		document.write(`${length} \n`)
	}
	document.write(`</div>`)
}