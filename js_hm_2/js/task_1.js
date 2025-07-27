let a = parseInt(prompt('Введіть значення A', '0'))
let b = parseInt(prompt('Введіть значення B', '0'))

const sum = a + b
const multiplication = a * b
const division = a / b

document.write(
`
<table>
   <tr>
   	<th>Операція</th>
   	<th>Результат</th>
   </tr>
   <tr>
   	<td>Сума</td>
   	<td>${sum}</td>
   </tr>
   <tr>
   	<td>Добуток</td>
   	<td>${multiplication}</td>
   </tr>
   <tr>
   	<td>Частка</td>
   	<td>${division}</td>
   </tr>
   </table>
`)