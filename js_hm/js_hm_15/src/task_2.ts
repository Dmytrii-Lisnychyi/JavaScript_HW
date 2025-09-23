if (confirm('Почати тестування?')) {
	// Задача 4. Розробити клас Baner
	// Поля
	// Масив об’єктів ( графічних зображень та посилань на сайти)


	// методи
	// Метод випадкового вибору об’єкта (графічного зображення та посилання)
	// Метод виведення випадкового банера

	type BannerItem = {
		imageUrl: string;
		linkUrl: string;
	};

	const bannerItems: BannerItem[] = [
		{ imageUrl: 'https://picsum.photos/300/200?random=1', linkUrl: 'https://www.google.com/' },
		{ imageUrl: 'https://picsum.photos/300/200?random=2', linkUrl: 'https://www.wikipedia.org/' },
		{ imageUrl: 'https://picsum.photos/300/200?random=3', linkUrl: 'https://www.github.com/' }
	]
	class Banner {
		bannerItems: BannerItem[]
		constructor(initBannerItems: BannerItem[]) {
			this.bannerItems = initBannerItems
		}

		getRandomNum = () => Math.floor(Math.random() * this.bannerItems.length)

		getRandomBanner() {
			return this.bannerItems[this.getRandomNum()]
		}

		displayBanner() {
			const banner = this.getRandomBanner()
			document.write(`
   			<a href="${banner.linkUrl}" target="_blank">
      			<img src="${banner.imageUrl}" width="300">
   			</a>
			`)
		}
	}

	const banner = new Banner(bannerItems)
	banner.displayBanner()
}
