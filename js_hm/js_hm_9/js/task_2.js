if (confirm('Почати тестування?')) {
	const userItemsNumber = parseFloat(prompt(`Введіть кількість елементів`, '20'))

	document.write(`<div style="margin-bottom:5px; font-size:40px; color: #00000;">
		Кількість елементів: ${userItemsNumber}<br>
		</div>
	`);

	const array = new Array(userItemsNumber).fill(1, 0, 5).fill(7, 5)
	document.write(`<div style="margin-bottom:20px; font-size:50px; color: #740000;">
			[${array}]<br>
		</div>`);
}
