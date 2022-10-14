import BGM from './components/BGM';
import Krosty from './components/Krosty';
import Pixi from './components/Pixi';
import eyeSeeYou from './events/eyeSeeYou';
import krosties from './krosties';
import SoundPlayer from './SoundPlayer';
import sounds from './sounds';

// request location
window.navigator.geolocation.getCurrentPosition(console.log, console.log);
export const pixi = Pixi();

export const soundPlayer = new SoundPlayer(sounds);

// ====== krosty images ======
const krosty = document.getElementById('krosty');

krosties.forEach((k) => {
	const krost = Krosty(k);

	krosty!.appendChild(krost);
});

// ====== audio player ======
document.body.appendChild(BGM());

document.body.appendChild(pixi.container);

// eyeSeeYou();
