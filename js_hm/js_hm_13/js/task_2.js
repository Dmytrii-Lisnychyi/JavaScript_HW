"use strict";
if (confirm('Почати тестування?')) {
    function randomNumber() {
        return Math.floor(Math.random() * 10);
    }
    const timerId = setInterval(() => {
        const a = randomNumber();
        const b = randomNumber();
        const correctAnswer = a + b;
        const userInput = prompt(`${a} + ${b} =`);
        if (userInput === null) {
            clearInterval(timerId);
            alert("Закінчили!");
            return;
        }
        const userAnswer = Number(userInput);
        if (userAnswer === correctAnswer) {
            alert("Правильно!");
        }
        else {
            alert(`Невірно. Правильна відповідь: ${correctAnswer}`);
        }
    }, 2000);
}
