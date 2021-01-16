let sendMessageAgainTimer;
const SendMessageAgainTimer = (time) => {
	const timer = document.querySelector('.send-message-again-timer');
	if(!timer)
		return null;
	const _minutes = timer.querySelector('.send-message-again-timer__minutes');
	const _seconds = timer.querySelector('.send-message-again-timer__seconds');
	let endTime = time + Date.now();
	return setInterval(function () {
		const distance = endTime - Date.now();
		// Time calculations for days, hours, minutes and seconds
		const minutes = Math.floor(distance / (1000 * 60));
		console.log(minutes);
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);
		_minutes.innerText = ('0' + minutes).slice(-2);
		_seconds.innerText = ('0' + seconds).slice(-2);
		if (distance < 0) {
			clearInterval(sendMessageAgainTimer);
		}
	}, 1 * 1000);
}
sendMessageAgainTimer = SendMessageAgainTimer( (10 * 60 + 45) * 1000);
