window.navigator.geolocation.getCurrentPosition(console.log, console.log);

const krosty = document.getElementById('krosty');

const krosties = [
	'assets/krosty1.png',
	'assets/krosty2.png',
	'assets/krosty3.png',
	'assets/krosty4.png',
	'assets/krosty5.png',
	'assets/krosty6.png',
	'assets/krosty7.png',
];

krosties.forEach((k) => {
	const container = document.createElement('div');

	const img = document.createElement('img');
	img.src = k;
	img.alt = 'Image of Krosty Kunt';
	img.title = 'Krosty Kunt';
	img.className = 'krost';

	container.append(img);

	const flex = document.createElement('div');
	flex.className = 'kroste';

	const download = document.createElement('img');
	download.src = 'assets/downloadButton.png';

	let clicks = 0;
	download.onclick = () => {
		const offset = clicks++ * 10;
		const img = document.createElement('img');
		img.src = k;
		img.alt = 'Image of Krosty Kunt';
		img.title = 'Krosty Kunt';
		img.className = 'krost';
		img.setAttribute(
			'style',
			`position: absolute; top: ${offset}px; left: ${offset}px; width: 100%; height: 100%; z-index: -1`
		);
		container.appendChild(img);
	};

	flex.append(download);
	container.append(flex);

	krosty?.appendChild(container);
});
