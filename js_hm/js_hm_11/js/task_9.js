if (confirm('Почати тестування?')) {
	const pricesList = [150, 320, 780, 990, 45, 230, 670, 890, 120, 555];

	document.write(`<div style="margin-bottom:5px; font-size:40px; color: #00000;">
		Масив цін: ${pricesList}<br>
		</div>
	`);

	const sale = pricesList.map((price) => price *= 0.2);

	document.write(`<div style="margin-bottom:20px; font-size:50px; color: #bd0000;">
			[${sale}]<br>
		</div>`);
}