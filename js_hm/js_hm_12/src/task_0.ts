"use strict";
if (confirm('Почати тестування?')) {
	function getRandomNum(min:number, max:number) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}


	const getArray = (elCount:number, min:number, max:number) => Array.from({ length: elCount }, () => getRandomNum(min, max));
	const arr = getArray(5, 1, 5);
	document.write(`[${arr.join(', ')}]<br>`);
	let changedNumber = 0;
	//=============================================================================
	// //* Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
	let changed: boolean
	do {
		changed = false
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				const temp: number = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				document.write(`[${arr}]<br>`);
				changed = true
				changedNumber++
			}
		}
	} while (changed);
	document.write(`Метод сортування Бульбашкою: <br> [${arr}]<br>
		Кількість замін: ${changedNumber}<br>
		`);
	//=============================================================================
	// //*Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
	let leftIndex: number = 0
	let rightIndex: number = arr.length - 1
	while (leftIndex < rightIndex) {
		let changed: boolean = false
		for (let i = leftIndex; i <= rightIndex; i++) {
			if (arr[i - 1] > arr[i]) {
				const temp: number = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				document.write(`[${arr}]<br>`);
				changed = true
				changedNumber++
			}
		}
		if (!changed) break
		rightIndex--
		changed = false
		for (let i = rightIndex; i > leftIndex; i--) {
			if (arr[i - 1] > arr[i]) {
				const temp: number = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				document.write(`[${arr}]<br>`);
				changed = true
				changedNumber++
			}
		}
		if (!changed) break
		leftIndex++
	}
	document.write(`Метод сортування ЗМІШУВАННЯ: <br> [${arr}]<br>
		Кількість замін: ${changedNumber}<br>
		`);
	//=============================================================================
	// //* Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
	for (let k = 1; k < arr.length; k++) {
		let kay:number, i:number
		kay = arr[k]
		i = k - 1
		while (i >= 0 && arr[i] > kay) {
			arr[i + 1] = arr[i]
			document.write(`[${arr}]<br>`);
			i--
			changedNumber++
		}
		arr[i + 1] = kay
	}
	document.write(`Метод сортування ВКЛЮЧЕННЯМ: <br> [${arr}]<br>
		Кількість замін: ${changedNumber}<br>
	`);
	//=============================================================================
	// //*Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
	const namesArr = [
		"Anna", "Olga", "Ivan", "Maria", "Serhii", "Dmytro", "Oksana", "Yulia", "Viktor", "Natalia",
		"Andrii", "Kateryna", "Oleksandr", "Svitlana", "Pavlo", "Iryna", "Vladyslav", "Olena", "Roman", "Olga"
	];
	document.write(`[${namesArr}]<br>`);
	//=============================================================================
	// //*Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
	function findIndexBinarySearch(arr: string[], length: number): number {
		let start: number = 0;
		let end: number = arr.length - 1;
		while (start <= end) {
			const middle: number = Math.floor((start + end) / 2);
			const midLength: number = arr[middle].length;
			if (midLength === length) return middle;
			if (midLength < length) start = middle + 1;
			else end = middle - 1;
		}
		return -1;
	}
	const lengthSortArr: string[] = namesArr.sort((a, b) => a.length - b.length)
	const elementLength5: number = findIndexBinarySearch(lengthSortArr, 5)
	document.write(`[${lengthSortArr}]<br>`);
	document.write(`${elementLength5}<br>`);
	//=============================================================================
	// //*Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
	type DayOfWeek = 'Понеділок' | 'Вівторок' | 'Середа' | 'Четвер' | 'Пʼятниця' | 'Субота' | 'Неділя';
	const days: DayOfWeek[] = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота', 'Неділя'];
	function getRandomDay(): DayOfWeek {
		const index: number = Math.floor(Math.random() * days.length);
		return days[index];
	}
	const getRandMatrix = (rowCount: number, colCount: number) =>
		Array.from(
			{ length: rowCount },
			() => Array.from(
				{ length: colCount },
				() => getRandomDay()
			)
		)
	const randMatrix: DayOfWeek[][] = getRandMatrix(4, 8)
	console.log(randMatrix);
	document.write(`<div style="margin-bottom: 20px; font-size: 25px">
			${randMatrix.map(row => `[${row.join(' / ')}]`).join('<br>')
		}
	</div>`);
	for (let rowIndex = 0; rowIndex < randMatrix.length; rowIndex++) {
		let sundayNumber: number = 0
		for (const day of randMatrix[rowIndex]) {
			if (day === 'Неділя') sundayNumber++
		}
		document.write(`Кількість Неділь за ${rowIndex + 1} день: ${sundayNumber}<br>`);
	}
}
