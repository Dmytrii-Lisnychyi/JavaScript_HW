let priceProduct = parseInt(prompt('Введіть вартість товару', '0'))
let valueProducts = parseInt(prompt('Введіть кількість товару', '3'))

const priceProducts = priceProduct * valueProducts
const priceOneProduct = priceProduct

document.write(
	`
	<table>
		<tr>
			<th>Кількість товару</th>
			<th>Ціна товару</th>
		</tr>
		<tr>
			<td>${valueProducts}</td>
			<td>${priceProducts}</td>
		</tr>
		<tr>
			<td>1</td>
			<td>${priceOneProduct}</td>
		</tr>
	</table>
`
)