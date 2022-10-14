export default class SoundPlayer<T extends string> {
	sounds;

	constructor(sounds: { [key in T]: string }) {
		this.sounds = sounds;
	}

	play(sound: T, { volume = 1 } = {}) {
		const audio = document.createElement('audio');
		audio.src = this.sounds[sound];
		audio.autoplay = true;
		audio.onended = () => {
			document.body.removeChild(audio);
		};
		audio.volume = volume;

		document.body.appendChild(audio);
	}
}
