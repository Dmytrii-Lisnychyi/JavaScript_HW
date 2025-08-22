if (confirm('Почати тестування?')) {
	const carNumbers = [
		"AA1234BX", "FB5678CD", "AC9012EF", "BA3456GH", "CB7890IJ",
		"GA2345KL", "AB6789MN", "CC0123OP", "DA4567QR", "EB8901ST",
	];

	document.write(`<div style="margin-bottom:5px; font-size:20px; color: #00000;">
		Номери автомобілів: [${carNumbers}]<br>
		</div>
	`);

const carNumFirstLetterA = carNumbers.filter((number) => number[0] === 'A');

	document.write(`<div style="margin-bottom:20px; font-size:50px; color: #bd0000;">
			[${carNumFirstLetterA}]<br>
		</div>`);
}