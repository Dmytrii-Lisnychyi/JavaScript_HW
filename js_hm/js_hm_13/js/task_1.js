"use strict";
if (confirm('Почати тестування?')) {
    const boys = ["Іван", "Петро", "Олег"];
    const girls = ["Оля", "Марія", "Катя"];
    const dancePairs = [];
    for (const boy of boys) {
        for (const girl of girls) {
            dancePairs.push(`${boy} + ${girl}`);
        }
    }
    console.log("Усі можливі пари для танців:");
    console.log(dancePairs.join("\n"));
}
