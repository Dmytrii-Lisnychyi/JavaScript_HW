if (confirm('Почати тестування?')) {
	const pricesArr = [2400, 300, 570, 1200, 1720, 770, 690, 2100]

	document.write(`<div style="margin-bottom:5px; font-size:40px; color: #00000;">
		Масив цін: ${pricesArr}<br>
		</div>
	`);

	pricesArr.forEach((el, i, baseArrRef) => {
		if(el > 1000) baseArrRef[i]*= 0.7
	});

	document.write(`<div style="margin-bottom:20px; font-size:50px; color: #bd0000;">
			[${pricesArr}]<br>
		</div>`);
}