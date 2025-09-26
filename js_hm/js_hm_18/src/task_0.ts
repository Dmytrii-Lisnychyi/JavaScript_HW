"use strict"




function getSum() {
	const firstNum = parseInt(document.getElementById('num1').value)
	const secondNum = parseInt(document.getElementById('num2').value)
	const sum = firstNum + secondNum
	document.getElementById('result').value = sum
}

function getSubtract() {
	const firstNum = parseInt(document.getElementById('num1').value)
	const secondNum = parseInt(document.getElementById('num2').value)
	const subtract = firstNum - secondNum
	document.getElementById('result').value = subtract
}

function getProduct() {
	const firstNum = parseInt(document.getElementById('num1').value)
	const secondNum = parseInt(document.getElementById('num2').value)
	const product = firstNum * secondNum
	document.getElementById('result').value = product
}

function getDivision() {
	const firstNum = parseInt(document.getElementById('num1').value)
	const secondNum = parseInt(document.getElementById('num2').value)
	const division = firstNum / secondNum
	document.getElementById('result').value = division
}



const btnSum = document.getElementById('sum')
const btnSubtract = document.getElementById('subtract')
const btnProduct = document.getElementById('product')
const btnDivision = document.getElementById('division')

btnSum?.onclick = getSum
btnSubtract?.onclick = getSubtract
btnProduct?.onclick = getProduct
btnDivision?.onclick= getDivision