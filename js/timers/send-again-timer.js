let sendAgainTimer;
const SendAgainTimer = (time) => {
	const timer = document.querySelector('.send-again-timer');
	if(!timer)
		return null;
	const _seconds = timer.querySelector('.send-again-timer__seconds');
	let endTime = time + Date.now();
	return setInterval(function () {
		const distance = endTime - Date.now();
		// Time calculations for days, hours, minutes and seconds
		const seconds = Math.floor(distance / 1000);
		_seconds.innerText = seconds;
		if (distance < 0) {
			clearInterval(sendAgainTimer);
		}
	}, 1 * 1000);
}
sendAgainTimer = SendAgainTimer( 50 * 1000);
