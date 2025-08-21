let costGoods = parseInt(prompt('Введіть вартість товару', '0'))
let quantityGoods = parseInt(prompt('Введіть кількість товару', '0'))

const vatPercentage = 5
const totalСost = costGoods * quantityGoods
const vatValue = (totalСost / 100) * vatPercentage

document.write(
	`
	Загальна вартість ${totalСost} <br>
	ПДВ ${vatValue}
	`
)