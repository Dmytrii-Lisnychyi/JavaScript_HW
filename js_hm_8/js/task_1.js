if (confirm('Почати тестування?')) {
	function userCanAffordProducts(namesArr, pricesArr, money) {
		let prod = []
		for (let i = 0; i < pricesArr.length; i++) {
			if (money >= pricesArr[i]) {
				prod.push(`${namesArr[i]} - ${pricesArr[i]}грн`)
			}
		}
		return prod
	}

	function displayProducts(arr) {
		let res = ``
		for (let i = 0; i < arr.length; i++) {
			res += `${arr[i]}<br>`
		}
		return res
	}

	const productNamesList = ['Огірок', 'Картопля', 'Помідор', 'Перець', 'Морква']
	const productPricesList = [50, 25, 55, 80, 10]

	const userMoney = parseInt(prompt('Скільки маєте грошей?'))

	if (isNaN(userMoney)) {
		alert("Будь ласка, введіть число!");
	} else {
		const userCanAfford = userCanAffordProducts(productNamesList, productPricesList, userMoney)
		const displayProd = displayProducts(userCanAfford)

		if (userCanAfford.length === 0) {
			document.write(`На жаль, ви не можете купити жоден продукт 😔. У Вас  ${userMoney.toFixed(2)}грн <br>`)
		} else {
			document.write(`У Вас  ${userMoney.toFixed(2)}грн <br>
			Ви можете купити такі продукти:<br>${displayProd}`)
		}
	}
}