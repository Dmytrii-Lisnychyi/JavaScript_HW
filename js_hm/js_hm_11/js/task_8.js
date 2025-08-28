if (confirm('Почати тестування?')) {
	const namesArr = [
		"Олександр",
		"Марія",
		"Іван",
		"Олена",
		"Дмитро",
		"Анна",
		"Сергій",
		"Тетяна",
		"Віктор",
		"Наталія"
	]

	document.write(`<div style="margin-bottom:5px; font-size:20px; color: #00000;">
		Масив імен: [${namesArr}]<br>
		</div>
	`);

	const namesFirstLetter = namesArr.map((name) => name[0]);

	document.write(`<div style="margin-bottom:20px; font-size:50px; color: #bd0000;">
			[${namesFirstLetter}]<br>
		</div>`);
}