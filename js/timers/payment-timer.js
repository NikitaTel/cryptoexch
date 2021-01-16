let paymentTimer;
const PaymentTimer = (time) => {
	const timer = document.querySelector('.countdown');
	if(!timer)
		return null;
	const _minutes = timer.querySelector('.countdown__minutes');
	const _seconds = timer.querySelector('.countdown__seconds');
	let endTime = time + Date.now();
	return setInterval(function () {
		
		const distance = endTime - Date.now();
		// Time calculations for days, hours, minutes and seconds
		const minutes = Math.floor(distance / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);
		_minutes.innerText = ('0' + minutes).slice(-2);
		_seconds.innerText = ('0' + seconds).slice(-2);
		if (distance < 0) {
			clearInterval(paymentTimer);
		}
	}, 1 * 1000);
}
paymentTimer = PaymentTimer(20 * 60 * 1000);
