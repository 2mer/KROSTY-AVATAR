import { Application } from 'pixi.js';

export default function Pixi() {
	const container = document.createElement('div');

	container.className = 'pixi-container';

	const box = { app: undefined as undefined | Application };

	setTimeout(() => {
		const app = new Application({
			resizeTo: container,
			backgroundAlpha: 0,
			backgroundColor: 0,
		});
		box.app = app;
		container.appendChild(app.view);
	});

	return {
		container,
		get app() {
			return box.app;
		},
	};
}
