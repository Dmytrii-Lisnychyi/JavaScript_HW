if (confirm('Почати тестування?')) {
	const userItemsNumber = parseFloat(prompt(`Введіть кількість елементів`, '10'))

	document.write(`<div style="margin-bottom:5px; font-size:40px; color: #00000;">
		Кількість елементів: ${userItemsNumber}<br>
		</div>
	`);
	
	const firstHalf = Math.floor(userItemsNumber / 2);

	const array = new Array(userItemsNumber).fill(1,0,firstHalf).fill(7,firstHalf)
	document.write(`<div style="margin-bottom:20px; font-size:50px; color: #740000;">
			[${array}]<br>
		</div>`);
}