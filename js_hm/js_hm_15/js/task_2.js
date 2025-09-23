"use strict";
if (confirm('Почати тестування?')) {
    const bannerItems = [
        { imageUrl: 'https://picsum.photos/300/200?random=1', linkUrl: 'https://www.google.com/' },
        { imageUrl: 'https://picsum.photos/300/200?random=2', linkUrl: 'https://www.wikipedia.org/' },
        { imageUrl: 'https://picsum.photos/300/200?random=3', linkUrl: 'https://www.github.com/' }
    ];
    class Banner {
        constructor(intBannerItems) {
            this.getRandomNum = () => Math.floor(Math.random() * this.bannerItems.length);
            this.bannerItems = intBannerItems;
        }
        getRandomBanner() {
            return this.bannerItems[this.getRandomNum()];
        }
        displayBanner() {
            const banner = this.getRandomBanner();
            document.write(`
   			<a href="${banner.linkUrl}" target="_blank">
      			<img src="${banner.imageUrl}" width="300">
   			</a>
			`);
        }
    }
    const banner = new Banner(bannerItems);
    banner.displayBanner();
}
