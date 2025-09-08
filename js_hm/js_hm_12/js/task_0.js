"use strict";
if (confirm('Почати тестування?')) {
    function getRandomNum(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    const getArray = (elCount, min, max) => Array.from({ length: elCount }, () => getRandomNum(min, max));
    const arr = getArray(5, 1, 5);
    document.write(`[${arr.join(', ')}]<br>`);
    let changedNumber = 0;
    //=============================================================================
    // //* Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
    let changed;
    do {
        changed = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                const temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                document.write(`[${arr}]<br>`);
                changed = true;
                changedNumber++;
            }
        }
    } while (changed);
    document.write(`Метод сортування Бульбашкою: <br> [${arr}]<br>
		Кількість замін: ${changedNumber}<br>
		`);
    //=============================================================================
    // //*Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex < rightIndex) {
        let changed = false;
        for (let i = leftIndex; i <= rightIndex; i++) {
            if (arr[i - 1] > arr[i]) {
                const temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                document.write(`[${arr}]<br>`);
                changed = true;
                changedNumber++;
            }
        }
        if (!changed)
            break;
        rightIndex--;
        changed = false;
        for (let i = rightIndex; i > leftIndex; i--) {
            if (arr[i - 1] > arr[i]) {
                const temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                document.write(`[${arr}]<br>`);
                changed = true;
                changedNumber++;
            }
        }
        if (!changed)
            break;
        leftIndex++;
    }
    document.write(`Метод сортування ЗМІШУВАННЯ: <br> [${arr}]<br>
		Кількість замін: ${changedNumber}<br>
		`);
    //=============================================================================
    // //* Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
    for (let k = 1; k < arr.length; k++) {
        let kay, i;
        kay = arr[k];
        i = k - 1;
        while (i >= 0 && arr[i] > kay) {
            arr[i + 1] = arr[i];
            document.write(`[${arr}]<br>`);
            i--;
            changedNumber++;
        }
        arr[i + 1] = kay;
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
    function findIndexBinarySearch(arr, length) {
        let start = 0;
        let end = arr.length - 1;
        while (start <= end) {
            const middle = Math.floor((start + end) / 2);
            const midLength = arr[middle].length;
            if (midLength === length)
                return middle;
            if (midLength < length)
                start = middle + 1;
            else
                end = middle - 1;
        }
        return -1;
    }
    const lengthSortArr = namesArr.sort((a, b) => a.length - b.length);
    const elementLength5 = findIndexBinarySearch(lengthSortArr, 5);
    document.write(`[${lengthSortArr}]<br>`);
    document.write(`${elementLength5}<br>`);
    const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота', 'Неділя'];
    function getRandomDay() {
        const index = Math.floor(Math.random() * days.length);
        return days[index];
    }
    const getRandMatrix = (rowCount, colCount) => Array.from({ length: rowCount }, () => Array.from({ length: colCount }, () => getRandomDay()));
    const randMatrix = getRandMatrix(4, 8);
    console.log(randMatrix);
    document.write(`<div style="margin-bottom: 20px; font-size: 25px">
			${randMatrix.map(row => `[${row.join(' / ')}]`).join('<br>')}
	</div>`);
    for (let rowIndex = 0; rowIndex < randMatrix.length; rowIndex++) {
        let sundayNumber = 0;
        for (const day of randMatrix[rowIndex]) {
            if (day === 'Неділя')
                sundayNumber++;
        }
        document.write(`Кількість Неділь за ${rowIndex + 1} день: ${sundayNumber}<br>`);
    }
}
