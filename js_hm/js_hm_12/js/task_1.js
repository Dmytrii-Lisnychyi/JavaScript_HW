"use strict";
if (confirm('Почати тестування?')) {
    const getRandomRow = (elCount, min, max) => Array.from({ length: elCount }, () => min + Math.floor(Math.random() * (max - min + 1)));
    const getRandMatrix = (rowCount, colCount, min, max) => Array.from({ length: rowCount }, () => getRandomRow(colCount, min, max));
    const randMatrix = getRandMatrix(3, 7, 50, 500);
    document.write(`<div style="margin-bottom: 20px; font-size: 25px">
		${randMatrix.map((row) => `[${row.join(' / ')}]`).join('<br>')}
	</div>`);
    console.log(randMatrix);
    // 1) Загальний прибуток кожного магазину за тиждень
    let shopNum = 0;
    for (const shop of randMatrix) {
        let sum = 0;
        for (const profit of shop) {
            sum += profit;
        }
        shopNum++;
        document.write(`Магазин №${shopNum} заробив ${sum}грн<br>`);
    }
    // 2) Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
    function getDayName(value) {
        let dayName;
        switch (value) {
            case 1:
                dayName = 'Понеділок';
                break;
            case 2:
                dayName = 'Вівторок';
                break;
            case 3:
                dayName = 'Середа';
                break;
            case 4:
                dayName = 'Четвер';
                break;
            case 5:
                dayName = 'П\'ятниця';
                break;
            case 6:
                dayName = 'Субота';
                break;
            case 7:
                dayName = 'Неділя';
                break;
            default:
                dayName = 'Де я';
                break;
        }
        return dayName;
    }
    const dayName = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
    for (let dayIndex = 0; dayIndex < randMatrix[0].length; dayIndex++) {
        let daySum = 0;
        for (let shopIndex = 0; shopIndex < randMatrix.length; shopIndex++) {
            daySum += randMatrix[shopIndex][dayIndex];
        }
        document.write(`${dayName[dayIndex]}: ${daySum}грн<br>`);
    }
    // 3) Загальний прибуток за робочі дні
    let totalProfitSum = 0;
    for (let dayIndex = 0; dayIndex < 5; dayIndex++) {
        for (const shop of randMatrix) {
            totalProfitSum += shop[dayIndex];
        }
    }
    document.write(`totalSum: ${totalProfitSum}грн<br>`);
    // 4) Загальний прибуток за вихідні дні
    let weekendProfitSum = 0;
    for (let dayIndex = 5; dayIndex < randMatrix[0].length; dayIndex++) {
        for (const shop of randMatrix) {
            weekendProfitSum += shop[dayIndex];
        }
    }
    document.write(`weekendProfitSum: ${weekendProfitSum}грн<br>`);
    // 5) Максимальний прибуток за середу
    let wednesdayProfitMax = 0;
    const wednesdayIndex = dayName.indexOf('Середа');
    for (const shop of randMatrix) {
        wednesdayProfitMax += shop[wednesdayIndex];
    }
    document.write(`weekendProfitSum: ${wednesdayProfitMax}грн<br>`);
    // 6) Cформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
    const arrMoreThan200 = randMatrix
        .flatMap((row) => row.filter((e) => e > 200));
    document.write(`arrMoreThan200: [${arrMoreThan200}]<br>`);
    // 7) Відсортувати кожен тиждень за зростанням
    for (const shop of randMatrix) {
        const sortShop = shop.sort((a, b) => a - b);
        document.write(`[${sortShop}]<br>`);
    }
    //8) Відсортувати тижні (рядки) за спаданням максимального елемента у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
    for (const row of randMatrix) {
        let maxProfitOfWeek = row.sort((a, b) => a - b < 0 ? 1 : -1);
        document.write(`[${maxProfitOfWeek}]<br>`);
    }
    //9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
    const maxProfitShopSort = randMatrix
        .flatMap((row) => row.reduce((prevSum, currNum) => prevSum + currNum, 0))
        .sort((a, b) => a - b < 0 ? 1 : -1);
    document.write(`[${maxProfitShopSort}]<br>`);
}
