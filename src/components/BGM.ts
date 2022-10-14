export default function BGM() {
	const audio = document.createElement('audio');
	audio.src = '/assets/bgm.wav';
	audio.controls = true;
	audio.loop = true;
	audio.volume = 0.3;
	audio.muted = true;
	audio.oncanplay = () => {
		audio.play();
	};
	let audioScale = 1;
	audio.onpause = () => {
		setTimeout(() => {
			audio.style.transform = `scale(${(audioScale /= 2)})`;
			audio.play();
		}, 1000);
	};
	return audio;
}
