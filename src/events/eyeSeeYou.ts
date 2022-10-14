export default function eyeSeeYou({ interval = 1000 } = {}) {
	const images = document.querySelectorAll('img');

	let currentImages = [...images];

	function transformImage(onComplete = () => {}) {
		const img = currentImages.splice(
			Math.floor(Math.random() * (currentImages.length - 1)),
			1
		)[0];

		if (img) {
			const size = img.getBoundingClientRect();
			img.src = '/assets/black-eye.gif';
			img.style.width = `${size.width}px`;
			img.style.height = `${size.height}px`;
			img.style.objectFit = 'stretch';

			setTimeout(() => transformImage(onComplete), interval);
		} else {
			onComplete();
		}
	}

	setTimeout(
		() =>
			transformImage(() => {
				document.body.style.backgroundImage =
					'url(/assets/black-eye.gif)';
			}),
		interval
	);
}
