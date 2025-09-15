"use strict";
if (confirm('Почати тестування?')) {
    const date = {
        day: 12,
        month: 3,
        year: 2020
    };
    function getYearInN({ year, month }, N) {
        return (Math.floor((month - 1 + N) / 12) + year);
    }
    console.log(getYearInN(date, 40));
}
