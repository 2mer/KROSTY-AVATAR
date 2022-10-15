import { soundPlayer } from '..';

export default function claimYourKrosty() {
	function handle() {
		soundPlayer.play('claim');

		document.removeEventListener('mousemove', handle);
	}

	document.addEventListener('mousemove', handle);
}
