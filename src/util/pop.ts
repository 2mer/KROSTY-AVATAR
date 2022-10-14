import Color from 'color';
import gsap from 'gsap';
import { ParticleContainer, Sprite, Texture } from 'pixi.js';
import { pixi, soundPlayer } from '..';
import getImageData from './getImageData';
import isDev from './isDev';

export default function pop(
	image: HTMLImageElement,
	{
		segments = 100,
		speed = 200,
		offset = { x: 0, y: 0 },
		stagger = 0.0006,
	} = {}
) {
	const download = !isDev();
	const desiredPosition = { x: 95, y: pixi.app!.screen.bottom - 50 };

	const particleContainer = new ParticleContainer(
		image.width * image.height,
		{ position: true, alpha: true, tint: true, rotation: true, scale: true }
	);

	const bounds = image.getBoundingClientRect();
	const imageData = getImageData(image);
	const imageSize = { x: image.naturalWidth, y: image.naturalHeight };

	const ratio = {
		x: imageSize.x / segments,
		y: imageSize.y / segments,
	};

	const sprites: Sprite[] = [];

	const pixelsPerSegment = {
		x: bounds.width / segments,
		y: bounds.height / segments,
	};

	for (let j = 0; j < segments; j++) {
		for (let i = 0; i < segments; i++) {
			const pixel = {
				x: Math.floor(ratio.x * i),
				y: Math.floor(ratio.y * j),
			};

			const index = pixel.x * 4 + pixel.y * imageSize.x * 4;

			const c = {
				r: imageData.data[index + 0],
				g: imageData.data[index + 1],
				b: imageData.data[index + 2],
				a: imageData.data[index + 3],
			};
			const color = Color.rgb(c.r, c.g, c.b);

			const velDir = {
				x: i / (segments - 1) - 0.5 + offset.x,
				y: j / (segments - 1) - 0.5 + offset.y,
			};

			const mag = Math.sqrt(velDir.x ** 2 + velDir.y ** 2) + 1e-6;

			const sprite = Sprite.from(Texture.WHITE);
			sprite.position = {
				x: bounds.x + i * pixelsPerSegment.x,
				y: bounds.y + j * pixelsPerSegment.y,
			};
			sprite.width = pixelsPerSegment.x;
			sprite.height = pixelsPerSegment.y;
			sprite.tint = color.rgbNumber();
			sprite.alpha = 1;
			sprite.anchor.set(0.5, 0.5);
			(sprite as any).vel = {
				x: (velDir.x / mag) * speed,
				y: (velDir.y / mag) * speed,
			};

			sprites.push(sprite);
		}
	}

	const distance = (p1: any, p2: any) => {
		var deltaX = p2.x - p1.x;
		var deltaY = p2.y - p1.y;
		return deltaX * deltaX + deltaY * deltaY;
	};

	function symRandom() {
		return (Math.random() - 0.5) / 0.5;
	}

	const noise = 10;

	sprites.sort((a, b) => {
		return (
			distance(
				{ x: a.x + symRandom() * noise, y: a.y + symRandom() * noise },
				desiredPosition
			) -
			distance(
				{ x: b.x + symRandom() * noise, y: b.y + symRandom() * noise },
				desiredPosition
			)
		);
	});

	sprites.forEach((sprite) => {
		particleContainer.addChild(sprite);
	});

	function die() {
		pixi.app!.stage.removeChild(particleContainer);
		particleContainer.destroy({ children: true });
	}

	function downloadImage() {
		var a = document.createElement('a');
		a.href = image.src;
		a.download = 'KROSTY-AVATAR.png';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

	const animation = gsap.timeline({
		onComplete: () => {
			die();
			if (download) {
				downloadImage();
			}
		},
	});

	function suckSprites(sprites: Sprite[], delay = 0) {
		// blood
		animation.set(
			sprites,
			{
				tint: () => (100 + 150 * Math.random()) << 16,
				stagger,
			},
			delay
		);

		// desired position
		animation.to(
			sprites.map((s) => s.position),
			{
				x: desiredPosition.x,
				y: desiredPosition.y,
				duration: (i) => 0.5 + Math.random(),

				stagger,
			},
			delay
		);

		// scale
		animation.to(
			sprites.map((s) => s.scale),
			{
				x: (i, scale) => scale.x + 1,
				y: (i, scale) => scale.y + 1,
				duration: (i) => 1 + Math.random(),

				stagger,
			},
			delay
		);
	}

	function tearSprites(sprites: Sprite[], delay = 0) {
		gsap.delayedCall(delay, () => soundPlayer.play('rip'));

		// desired position
		animation.to(
			sprites.map((s) => s.position),
			{
				x: desiredPosition.x,
				y: desiredPosition.y,
				duration: (i) => 0.5 + Math.random(),

				// stagger,
			},
			delay
		);

		// scale
		animation.to(
			sprites.map((s) => s.scale),
			{
				x: (i, scale) => scale.x + 1,
				y: (i, scale) => scale.y + 1,
				duration: (i) => 1 + Math.random(),

				// stagger,
			},
			delay
		);
	}

	function createSegments(sprites: Sprite[], seeds = 5) {
		const seedPoints = Array.from({ length: seeds }).map(() => ({
			x:
				bounds.x +
				Math.floor(segments * Math.random() * pixelsPerSegment.x),
			y:
				bounds.y +
				Math.floor(segments * Math.random()) * pixelsPerSegment.y,
		}));

		const groups: Sprite[][] = seedPoints.map(() => []);

		sprites.forEach((sprite) => {
			const distances = seedPoints.map((p) =>
				distance(p, sprite.position)
			);

			const min = Math.min(...distances);
			const index = distances.indexOf(min);

			groups[index].push(sprite);
		});

		return groups.filter((group) => group.length);
	}

	// const tearAmount = Math.floor(segments ** 2 * 0.5);
	// const tearDuration = 2;
	// const tearCount = 5;
	// const tearThreshold = 30;
	// const tearAmount = Math.floor((sprites.length * 0.5) / tearCount);

	// for (let i = 0; i < tearCount; i++) {
	// 	const tearPoint = {
	// 		x:
	// 			bounds.x +
	// 			Math.floor(segments * Math.random() * pixelsPerSegment.x),
	// 		y:
	// 			bounds.y +
	// 			Math.floor(segments * Math.random()) * pixelsPerSegment.y,
	// 	};
	// 	const tSprites: Sprite[] = [];

	// 	sprites.forEach((sprite, index) => {
	// 		if (distance(sprite.position, tearPoint) <= tearThreshold) {
	// 			tSprites.concat(sprites.splice(index, 1));
	// 		}
	// 	});

	// 	console.log(tSprites, tearPoint);

	// 	// const startIndex = Math.floor((sprites.length - tearAmount) / 2);
	// 	// const tSprites = sprites.splice(startIndex, tearAmount);
	// 	tearSprites(tSprites, 1 + i);
	// }

	const seeds = 30;
	createSegments(sprites, seeds).forEach((sprites, index) => {
		const r = Math.random();

		if (r < 0.5) {
			suckSprites(sprites, (index * 1) / seeds);
		} else {
			tearSprites(sprites, (index * 1) / seeds);
		}
	});

	// suckSprites(sprites);

	pixi.app!.stage.addChild(particleContainer);
}
