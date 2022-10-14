import krosties from '../krosties';
import { soundPlayer } from '..';
import pop from '../util/pop';

export default function (krosty: typeof krosties[number]) {
	const container = document.createElement('div');

	const img = document.createElement('img');
	img.src = krosty.image;
	img.alt = 'Image of Krosty Kunt';
	img.title = 'Krosty Kunt';
	img.className = 'krost';

	container.append(img);

	const flex = document.createElement('div');
	flex.className = 'kroste';

	const download = document.createElement('img');
	download.src = '/assets/downloadButton.png';
	download.className = 'download';

	// dead variant
	const nImg = document.createElement('img');
	nImg.src = krosty.deadImage;
	nImg.alt = 'Image of a dead Krosty Kunt';
	nImg.className = 'krost';
	nImg.setAttribute(
		'style',
		`position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; filter: grayscale(1)`
	);
	container.appendChild(nImg);

	let clicks = 0;
	download.onclick = () => {
		// const offset = clicks++ * 10;
		// const nImg = document.createElement('img');
		// nImg.src = krosty.image;
		// nImg.alt = 'Image of Krosty Kunt';
		// nImg.title = 'Krosty Kunt';
		// nImg.className = 'krost';
		// nImg.setAttribute(
		// 	'style',
		// 	`position: absolute; top: ${offset}px; left: ${offset}px; width: 100%; height: 100%; z-index: -1`
		// );
		// container.appendChild(nImg);

		soundPlayer.play(krosty.sound || 'select');

		pop(img);
		img.style.opacity = '0';
		download.style.display = 'none';
	};

	flex.append(download);
	container.append(flex);

	return container;
}
