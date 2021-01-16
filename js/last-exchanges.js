const lastExchanges = document.querySelector('.exchange-list__wrapper');

const lastExchangeBody = `
	<ul class="flex-sb">
    <li class="flag">
      <div class="flag_img "></div>
      <p></p>
      <p></p>
    </li>
    <li class="iz">
      <div class="pm_icon"></div><span></span>
    </li>
    <li>
      <div class="i-next"></div>
      <p class="cipher"></p>
    </li>
    <li class="iz">
      <div class="pm_icon "></div><span></span>
    </li>
  </ul>`

const addLastExchange = ({country, time, system1, value1, system2, value2}) => {
	
	const newExchange = document.createElement('div');
	const exchangeToRemove = lastExchanges.children[6];
	newExchange.classList.add('.exchange-list__item');
	newExchange.innerHTML = lastExchangeBody;
	newExchange.querySelector('.flag_img').classList.add(country);
	newExchange.querySelector('.flag > p').innerText = time;
	newExchange.querySelector('.flag > p:last-child').innerText = value1;
	newExchange.querySelector('.pm_icon').classList.add(system1.icon);
	newExchange.querySelector('span').innerText = system1.description;
	newExchange.querySelector('.cipher').innerText = value2;
	newExchange.querySelectorAll('.pm_icon')[1].classList.add(system2.icon);
	newExchange.querySelectorAll('span')[1].innerText = system2.description;
	newExchange.style.height = '0';
	newExchange.style.transform = 'translateY(-100px)';
	lastExchanges.prepend(newExchange);
	const heightEl = newExchange.scrollHeight;
	const heightRemEL = exchangeToRemove.scrollHeight;
	
	requestAnimationFrame(function() {
		newExchange.classList.add('_new-exchange');
		exchangeToRemove.classList.add('_new-exchange');
		newExchange.style.height = heightEl + 5 + 'px';
		newExchange.style.transform = 'translateY(0px)';
		exchangeToRemove.style.height = heightRemEL + 'px';
		requestAnimationFrame(function (){
			exchangeToRemove.style.transform = 'translateY(100px)';
			exchangeToRemove.style.height = '0';

		});
	})
	cascadeChildrenOpacity(lastExchanges, 1.3);
	newExchange.addEventListener('transitionend', () => {
		newExchange.style.height = 'auto';
		newExchange.classList.remove('_new-exchange');
		exchangeToRemove.remove();
	})
}

// const cascadeChildrenOpacity = (node, divider) => {
// 	let opacity = 1;
// 	for(let i=0; i< node.children.length; i++){
// 		node.children[i].style.opacity = opacity;
// 		opacity/= divider;
// 	}
// }
cascadeChildrenOpacity(lastExchanges, 1.3);

setTimeout(()=>{
	addLastExchange({country: 'ukraine', time: '00:00', system1: {icon: 'ac', description: 'AdvCash'}, value1: '100.00',
		system2: {icon: 'ac', description: 'AdvCash'}, value2: '100.00' });
}, 2000)
