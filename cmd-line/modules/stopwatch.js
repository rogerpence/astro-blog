export function StopWatch() {
	//this.startTime = null;
	this.startTime = Date.now();

	this.reset = function () {
		this.startTime = Date.now();
	};

	this.stop = function () {
		this.startTime = null;
	};

	this.elapsedMs = function (msg = '') {
		const stopTime = Date.now();
		const colon = msg == '' ? '' : ': ';

		return `${msg}${colon}${stopTime - this.startTime}ms`;
	};

	this.elapsedSecs = function (msg = '') {
		const stopTime = Date.now();
		const colon = msg == '' ? '' : ': ';

		const seconds = (Number(stopTime) - Number(this.startTime)) / 1000;

		return `${msg}${colon}${seconds}Secs`;
	};
}
