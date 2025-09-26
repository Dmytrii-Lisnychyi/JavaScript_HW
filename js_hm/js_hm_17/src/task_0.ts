"use strict";
if (confirm('Почати тестування?')) {
	// Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.



	class TDate {
		private _day: number
		private _month: number
		private _year: number
		constructor(day: number, month: number, year: number) {
			this._day = day
			this._month = month
			this._year = year
		}

		get Day() {
			return this._day
		}
		set Day(val) {
			if (val <= 0 || val > 31) throw new Error('Day is incorrect')
			this._day = val
		}

		get Month() {
			return this._month
		}
		set Month(val) {
			if (val <= 0 || val > 12) throw new Error('Month is incorrect')
			this._month = val
		}

		get Year() {
			return this._year
		}
		set Year(val) {
			if (val <= 0) throw new Error('Year is incorrect')
			this._year = val
		}

		addDayValue(val: number) {
			this._day += val

			while (this._day > 31) {
				this._day -= 31
				this._month++
				if (this._month > 12) {
					this._month = 1
					this._year++
				}
			}
		}

		subtractDayValue(val: number) {
			this._day -= val
			while (this._day < 1) {
				this._day += 31
				this._month--
				if (this._month < 1) {
					this._month = 12
					this._year--
				}
			}
		}

		addMonthValue(val: number) {
			this._month += val

			while (this._month > 12) {
				this._month -= 12
				this._year++
			}
		}

		subtractMonthValue(val: number) {
			this._month -= val
			while (this._month < 1) {
				this._month += 12
				this._year--
			}
		}

		addYearValue(val: number) {
			this._year += val
		}

		subtractYearValue(val: number) {
			this._year -= val
		}

		toString() {
			return `${this._day} / ${this._month} / ${this._year}`
		}
	}

	const date = new TDate(31, 12, 2025)


	date.addDayValue(555)

	document.write(`${date}`);

}