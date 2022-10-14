import sounds from './sounds';

export default [
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
	},
] as { image: string; deadImage: string; sound?: keyof typeof sounds }[];
