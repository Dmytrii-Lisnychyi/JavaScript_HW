if (confirm('Почати тестування?')) {
	const N = 10
	const M = 10
	const K = 5

	let hit

	const shipRow = 1 + Math.floor(Math.random() * N);
	const shipCol = 1 + Math.floor(Math.random() * M);

	alert(`${shipRow}, ${shipCol}`)
	for (let shot = 1; shot <= K; shot++) {
		const guessRow = parseInt(prompt(`Спроба ${shot} з ${K}. Введіть координату X (1-${N}):`));
		const guessCol = parseInt(prompt(`Введіть координату Y (1-${M}):`));
		if (guessRow === shipRow && guessCol === shipCol) {
			alert("Точно в ціль! Ви перемогли.");
			hit = true
			break;
		} else {
			alert("Не влучив!");
		}
	}
	if(!hit) alert(`Гру завершено. Ви не потопили корабель. Він був у клітинці (${shipRow}, ${shipCol}).`);
}
