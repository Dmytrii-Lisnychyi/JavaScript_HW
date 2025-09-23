if (confirm('Почати тестування?')) {
	// Задача 3. Розробити клас MultChecker для перевірки таблиці множення

	// Поля

	// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
	// Кількість правильних відповідей
	// Кількість неправильних відповідей

	// Методи

	// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
	// Перевірка правильності вказаної відповіді
	// render - виведення інформації про тестування на екран



	class MultChecker {
		number: number
		correctCount: number
		wrongCount: number
		private lastRandom: number | null = null

		constructor(number: number) {
			this.number = number
			this.correctCount = 0
			this.wrongCount = 0
		}

		private getRandomNum(): number {
			return 1 + Math.floor(Math.random() * 10)
		}

		getExample(): string {
			this.lastRandom = this.getRandomNum()
			return `${this.number} × ${this.lastRandom} = ?`
		}

		answerCheck(): void {
			if (this.lastRandom === null) {
				alert("Спочатку згенеруйте приклад!")
				return
			}
			const userInput = parseInt(prompt("Введіть відповідь") || "0")
			const correctAnswer = this.number * this.lastRandom

			if (userInput === correctAnswer) {
				this.correctCount++
				alert("Правильна відповідь")
			} else {
				this.wrongCount++
				alert(`Неправильно. Правильна відповідь: ${correctAnswer}`)
			}
		}

		render(): void {
			document.write(`
            <p>Перевірка таблиці множення на ${this.number}</p>
            <p>Правильних відповідей: ${this.correctCount}</p>
            <p>Неправильних відповідей: ${this.wrongCount}</p>
      `)
		}
	}

	const checker = new MultChecker(7)

	function myFunc(num: number) {
		setTimeout(() => {
			if (num < 3) {
				alert(checker.getExample())
				checker.answerCheck()
				myFunc(num + 1)
			} else {
				alert("Тест завершено")
				checker.render()
			}
		}, 2000)
	}
	myFunc(0)
}