"use strict";
function divList(contain, num) {
	for (let i = 1; i <= num; i++) {
		const myDiv = document.createElement('div')
		myDiv.innerText = 'Hello!' + ` №${i}`
		contain.append(myDiv)
	}
}


function lineClick() {
	let next = this.nextElementSibling
	while (next) {
		next.style.color = 'red'
		next = next.nextElementSibling
	}

}

const containerElement = document.querySelector('.main__body')

divList(containerElement, 10)

const newDivList = containerElement.querySelectorAll('div')


for (const div of newDivList) {
	div.onclick = lineClick
}