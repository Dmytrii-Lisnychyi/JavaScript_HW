const productPrice = parseFloat(prompt('Введіть ціну товару', '4999'))
const amountOfMoney = parseInt(prompt('Введіть кількість грошей в наявності','5002'))

const lottery = 4
const remainder = amountOfMoney - productPrice

if (remainder >= lottery)
	document.write(`у вас ще є ${remainder} залишку! Пропонуємо лотерею за 4грн.`)
else {
	if (amountOfMoney >= productPrice)
		document.write(`У вас вистачило грошей. Покупку оформлено!`)
	else
		document.write(`У вас недостатньо коштів!`)
}

