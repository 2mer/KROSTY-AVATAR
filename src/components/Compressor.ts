import gsap from 'gsap';
import { soundPlayer } from '..';

export default function Compressor() {
	const wrapper = document.querySelector('.compressor__offset');
	const compressor = document.getElementById('compressor');
	const trash = document.getElementById('trash');

	let mode = window.localStorage.getItem('compressor_mode') ?? 'compressor';

	gsap.set(trash, { translateY: mode === 'trash' ? '-100%' : '0' });
	gsap.set(compressor, {
		translateY: mode === 'compressor' ? '-100%' : '0',
	});

	wrapper?.addEventListener('click', () => {
		mode = mode === 'compressor' ? 'trash' : 'compressor';
		window.localStorage.setItem('compressor_mode', mode);

		if (mode === 'compressor') {
			gsap.timeline()
				.set(trash, { translateY: '0' }, 0)
				.set(compressor, { translateY: '-100%' });
			soundPlayer.play('krosty-mode');
		} else {
			gsap.timeline()
				.set(compressor, { translateY: '0' }, 0)
				.set(trash, { translateY: '-100%' });
			soundPlayer.play('trash-mode');
		}
	});
}
