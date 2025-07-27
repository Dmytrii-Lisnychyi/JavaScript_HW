// Задача 0. Обчислити значення виразів

let a = parseInt(prompt('Введіть значення A', '0'))
let b = parseInt(prompt('Введіть значення B', '0'))
let c = parseInt(prompt('Введіть значення C', '0'))


const s1 = a + 12 + b
const s2 = Math.sqrt((a + b) / (2 * a))
const s3 = Math.cbrt((a + b) * c)
const s4 = Math.sin(a / -b)

document.write(
	`
	s1 = ${s1} <br>
	s2 = ${s2} <br>
	s3 = ${s3} <br>
	s4 = ${s4}
	`
)