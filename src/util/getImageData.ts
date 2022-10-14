export default function getImageData(imageEl: HTMLImageElement) {
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	canvas.width = imageEl.naturalWidth;
	canvas.height = imageEl.naturalHeight;
	context!.drawImage(imageEl, 0, 0);
	return context!.getImageData(
		0,
		0,
		imageEl.naturalWidth,
		imageEl.naturalHeight
	);
}
