import isDev from '../util/isDev';

export default function BGM() {
	const audio = document.createElement('audio');
	audio.src = '/assets/bgm.wav';
	audio.controls = true;
	audio.loop = true;
	audio.volume = 0.3;
	audio.className = 'bgm';

	const canPlay = !isDev();
	audio.muted = !canPlay;

	let audioScale = 1;
	audio.onpause = () => {
		setTimeout(() => {
			audio.style.transform = `scale(${(audioScale /= 2)})`;
			audio.play();
		}, 1000);
	};

	if (canPlay) {
		audio.oncanplay = () => {
			audio.play();
		};
		let clicked = false;
		document.onclick = () => {
			if (!clicked) {
				clicked = true;
				audio.play();
			}
		};
	}
	return audio;
}
