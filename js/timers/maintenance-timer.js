let maintenanceTimer;
const MaintenanceTimer = (time) => {
	const timer = document.querySelector('.timer');
	if(!timer)
		return null;
	//const _days = timer.querySelector('.timer__days');
	const _hours = timer.querySelector('.timer__hours');
	const _minutes = timer.querySelector('.timer__minutes');
	const _seconds = timer.querySelector('.timer__seconds');
	let endTime = time + Date.now();
	return setInterval(function () {
		const distance = endTime - Date.now();
		// Time calculations for days, hours, minutes and seconds
		const hours = Math.floor(distance / (1000 * 60 * 60)).toString().split('');
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().split('');
		const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().split('');
		for(let i = 1 ; i <= 2; i++){
			if(hours.length - i >= 0){
				_hours.children[2-i].innerText = hours[hours.length-i];
			}
			else{
				_hours.children[2-i].innerText = '0';
			}
			if(minutes.length - i >= 0){
				_minutes.children[2-i].innerText = minutes[minutes.length-i];
			}
			else{
				_minutes.children[2-i].innerText = '0';
			}
			if(seconds.length - i >= 0){
				_seconds.children[2-i].innerText = seconds[seconds.length-i];
			}
			else{
				_seconds.children[2-i].innerText = '0';
			}
		}
		if (distance < 0) {
			clearInterval(maintenanceTimer);
		}
	}, 1 * 1000);
}
maintenanceTimer = MaintenanceTimer(48 * 60 * 60 * 1000);
