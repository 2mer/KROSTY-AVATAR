import krosties from '../krosties';
import { soundPlayer } from '..';
import pop from '../util/pop';

export default function (krosty: typeof krosties[number]) {
	const container = document.createElement('div');
	container.className = 'krosty__container';

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

	download.addEventListener('click', () => {
		soundPlayer.play(krosty.sound || 'select');

		pop(img);
		img.style.opacity = '0';
		flex.removeChild(download);

		const oos = document.createElement('div');

		oos.innerHTML = 'OUT_OF_STOCK';
		oos.style.color = 'red';
		oos.style.fontWeight = 'bold';
		oos.style.fontSize = '25px';
		oos.style.fontFamily = 'monospace';

		flex.appendChild(oos);

		krosty.dead = true;

		if (krosties.every((k) => k.dead)) {
			document.body.style.background = 'black';
		}
	});

	flex.append(download);
	container.append(flex);

	if (krosty.isNew) {
		const newImg = document.createElement('img');
		newImg.src = '/assets/new-badge.png';
		newImg.className = 'new-badge';

		container.appendChild(newImg);

		download.addEventListener('click', () => {
			container.removeChild(newImg);
		});
	}

	krosty.extra?.({ krosty, container, hover: flex });

	return container;
}
