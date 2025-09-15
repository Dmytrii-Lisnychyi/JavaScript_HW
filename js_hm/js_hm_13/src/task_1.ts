if (confirm('Почати тестування?')) {
	// Задача 4. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

	type Names = string

	const boys:Names[] = ["Іван", "Петро", "Олег"];
	const girls:Names[]  = ["Оля", "Марія", "Катя"];

	const dancePairs:Names[] = [];

	for (const boy of boys) {
		for (const girl of girls) {
			dancePairs.push(`${boy} + ${girl}`);
		}
	}

	console.log("Усі можливі пари для танців:");
	console.log(dancePairs.join("\n"));
}
