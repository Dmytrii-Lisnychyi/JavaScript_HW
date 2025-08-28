if (confirm('Почати тестування?')) {
	const arr = [5, 12, 7, -10, 9, 2, -8, -3, 17, 4, -11];

	document.write(`<div style="margin-bottom:5px; font-size:40px; color: #00000;">
		Масив елементів: [${arr}]<br>
		</div>
	`);

	let productOfPositiveNumbers = arr[0]
	for (let el of arr) {
		if (el > 0) {
			productOfPositiveNumbers *= el
		}
	}

	// for (let i = 0; i < arr.length - 1; i++) {
	// 	if (arr[i] > 0) productOfPositiveNumbers *= arr[i]
	// }

	document.write(`<div style="margin-bottom:5px; font-size:40px; color: #740000;">
			Добуток додатніх чисел: ${productOfPositiveNumbers};<br>
		</div>`);
}