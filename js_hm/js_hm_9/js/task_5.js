if (confirm('Почати тестування?')) {
	const arr = [69, 102, 67, 150, 99, 201, 88, 123, 77, 300, 56, 110, 95, 180, 42, 250, 60, 130, 80, 170];

	document.write(`<div style="margin-bottom:5px; font-size:40px; color: #00000;">
		Масив елементів: [${arr}]<br>
		</div>
	`);

	const firstNumArr = arr[0]
	arr.forEach((el , i , baseArrRef) => {
		if (el > firstNumArr) baseArrRef[i] *= 2
	});


	document.write(`<div style="margin-bottom:20px; font-size:30px; color: #740000;">
			[${arr}]<br>
		</div>`)
}
