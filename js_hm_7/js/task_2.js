function displaysBanner(img, title, link) {
	document.write(`
		<div style = "margin: 0 auto; position: relative; overflow: hidden; width: 200px; height: 300px; border: 1px solid #000; border-radius: 10px;">
			<h1 style = "position: relative; z-index: 1; text-align: center; color: orange; pointer-events: none;">${title}</h1>
			<a href="${link}">
				<img style = "position: absolute; top:0; left:0; width: 100%; height: 100%; object-fit: cover;" src="${img}" alt="Випадкове зображення">
			</a>
		</div>
		`)
}

const randomNumber = 1 + Math.floor(Math.random() * 1000)

const image = `https://picsum.photos/200/300?random=${randomNumber}`
const userTitle = String(prompt('Введіть заголовок', 'Рандомне зображення'))
const googleLink = 'https://www.google.com/'

displaysBanner(image, userTitle, googleLink)