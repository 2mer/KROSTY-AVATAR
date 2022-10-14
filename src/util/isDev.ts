export default function isDev() {
	return window.localStorage.getItem('dev') === 'true';
}
