// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

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