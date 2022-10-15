import BGM from './components/BGM';
import sounds from './sounds';
import isDev from './util/isDev';

export default [
	{
		image: '/assets/nkrosty1.png',
		deadImage: '/assets/nkrosty1_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty2.png',
		deadImage: '/assets/nkrosty2_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty3.png',
		deadImage: '/assets/nkrosty3_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty4.png',
		deadImage: '/assets/nkrosty4_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty5.png',
		deadImage: '/assets/nkrosty5_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty6.png',
		deadImage: '/assets/nkrosty6_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty7.png',
		deadImage: '/assets/nkrosty7_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty8.png',
		deadImage: '/assets/nkrosty8_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty9.png',
		deadImage: '/assets/nkrosty9_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty10.png',
		deadImage: '/assets/nkrosty10_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty11.png',
		deadImage: '/assets/nkrosty11_dead.png',
		sound: 'explosion',
		isNew: true,
		extra: ({ hover }) => {
			if (!isDev()) {
				hover.appendChild(BGM());
			}
		},
	},
	{
		image: '/assets/nkrosty12.png',
		deadImage: '/assets/nkrosty12_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty13.png',
		deadImage: '/assets/nkrosty13_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty14.png',
		deadImage: '/assets/nkrosty14_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty15.png',
		deadImage: '/assets/nkrosty15_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty16.png',
		deadImage: '/assets/nkrosty16_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty17.png',
		deadImage: '/assets/nkrosty17_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/nkrosty18.png',
		deadImage: '/assets/nkrosty18.png',
		sound: 'explosion',
		isNew: true,
		immortal: true,
	},
	{
		image: '/assets/nkrosty19.png',
		deadImage: '/assets/nkrosty19_dead.png',
		sound: 'explosion',
		isNew: true,
	},
	{
		image: '/assets/krosty1.png',
		deadImage: '/assets/krosty1_dead.png',
		sound: 'explosion',
	},
	{
		image: '/assets/krosty2.png',
		deadImage: '/assets/krosty2_dead.png',
		sound: 'explosion',
	},
	{
		image: '/assets/krosty3.png',
		deadImage: '/assets/krosty3_dead.png',
		sound: 'explosion',
	},
	{
		image: '/assets/krosty4.png',
		deadImage: '/assets/krosty4_dead.png',
		sound: 'explosion',
	},
	{
		image: '/assets/krosty5.png',
		deadImage: '/assets/krosty5_dead.png',
		sound: 'explosion',
	},
	{
		image: '/assets/krosty6.png',
		deadImage: '/assets/krosty6_dead.png',
		sound: 'explosion',
	},
	{
		image: '/assets/krosty7.png',
		deadImage: '/assets/krosty7_dead.png',
		sound: 'explosion',
		extra: ({ hover }) => {
			const a = document.createElement('a');
			a.innerHTML = 'ASCEND';
			a.style.color = 'white';
			a.style.fontSize = '30px';
			a.style.fontWeight = 'bold';
			a.style.fontFamily = 'monospace';
			a.style.filter = 'drop-shadow(0 0 4px blue)';
			a.href = 'https://waystone.netlify.app/';
			hover.appendChild(a);
		},
	},
] as {
	image: string;
	deadImage: string;
	sound?: keyof typeof sounds;
	isNew?: boolean;
	extra?: (ctx: { container: any; hover: any; krosty: any }) => void;
	dead?: boolean;
	immortal?: boolean;
}[];
