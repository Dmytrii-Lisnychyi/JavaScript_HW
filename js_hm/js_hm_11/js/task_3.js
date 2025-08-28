if (confirm('Почати тестування?')) {
	const arr = [45, 102, 67, 150, 99, 201, 88, 123, 77, 300, 56, 110, 95, 180, 42, 250, 60, 130, 80, 170];

	document.write(`<div style="margin-bottom:5px; font-size:40px; color: #00000;">
		Масив елементів: [${arr}]<br>
		</div>
	`);

	for (const el of arr) {
		if(el > 100) document.write(`<div style="margin-bottom:5px; font-size:40px; color: #740000;">
			${el}<br>
		</div>`);
	}
}