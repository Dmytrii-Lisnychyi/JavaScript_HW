"use strict";
if (confirm('Почати тестування?')) {
    // Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 
    class TMoney {
        constructor(balance) {
            this.balance = balance;
            this._dollarCourse = 49;
        }
        get DollarCourse() {
            return this._dollarCourse;
        }
        addMoney(val) {
            this.balance = ((this.balance * this._dollarCourse) + val) / this._dollarCourse;
        }
        withdrawMoney(val) {
            const toDollar = val / this._dollarCourse;
            if (this.balance < 0 || this.balance < toDollar)
                throw new Error('You do not have money');
            this.balance -= toDollar;
        }
        getRateForPlus100() {
            if (this.balance <= 0)
                throw new Error("You do not have money");
            const currentUAH = this.balance * this._dollarCourse;
            const neededUAH = currentUAH + 100;
            return neededUAH / this.balance;
        }
        toString() {
            return `Course dollar: ${this._dollarCourse} / Balance: ${this.balance.toFixed(2)} RateForPlus100: ${this.getRateForPlus100()}`;
        }
    }
    const money = new TMoney(0);
    money.addMoney(4950);
    money.addMoney(4950);
    money.withdrawMoney(500);
    document.write(`${money}<br>`);
}
