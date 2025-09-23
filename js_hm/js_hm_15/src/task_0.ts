"use strict";
if (confirm('Почати тестування?')) {
	// Задача 0,  Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.

	const obj1 = {
		integers: [1, 2, 55, 21, 11, 7, 9, 32],
		getProduct(min: number, max: number) {
			return this.integers.reduce((prevProduct, currentNum) => currentNum > min && currentNum < max ? prevProduct * currentNum : prevProduct, 1)
		}
	}
	const obj2 = {
		integers: [4, 22, 15, 21, 1, 8, 19, 2],
		getSum(min: number, max: number) {
			return this.integers.reduce((prevSum, currentNum) => currentNum > min && currentNum < max ? prevSum + currentNum : prevSum, 0)
		}
	}
	console.log(obj1.getProduct(1, 11));
	console.log(obj2.getSum(1, 11));

	let sumObj1 = obj2.getSum.apply(obj1, [1, 11])
	let productObj2 = obj1.getProduct.call(obj2, 1, 11)
	
	console.log(sumObj1);
	console.log(productObj2);
}