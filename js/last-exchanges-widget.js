//Widget
const exchangesWidget = document.querySelector('.last-exchanges-widget .last-exchanges-widget__wrapper');

const widgetExchangeBody = `
	<section class="last-exchanges-widget__exchange widget-exchange">
	 <div class="widget-exchange__body">
	    <div class="widget-exchange__country"></div>
	    <div class="widget-exchange__date"></div>
	    <div class="widget-exchange__divider"></div>
	    <div class="widget-exchange__gave">
	      <div class="widget-exchange__value"></div>
	      <div class="widget-exchange__payment-system"></div>
	    </div>
	    <span class="widget-exchange__arrow i-next"></span>
	    <div class="widget-exchange__received">
	      <div class="widget-exchange__value"></div>
	      <div class="widget-exchange__payment-system"></div>
	    </div>
    </div>
  </section>`;


const addWidgetExchange = ({country, time, system1, value1, system2, value2}) => {
	
	const newExchange = document.createElement('div');
	const exchangeToRemove = exchangesWidget.children[3];
	newExchange.innerHTML = widgetExchangeBody;
	newExchange.querySelector('.widget-exchange__country').classList.add(`logo-${country}`);
	newExchange.querySelector('.widget-exchange__date').innerText = time;
	newExchange.querySelector('.widget-exchange__gave .widget-exchange__value').innerHTML = value1;
	newExchange.querySelector('.widget-exchange__gave .widget-exchange__payment-system').classList.add(`logo-${system1}`);
	newExchange.querySelector('.widget-exchange__received .widget-exchange__value').innerHTML = value2;
	newExchange.querySelector('.widget-exchange__received .widget-exchange__payment-system').classList.add(`logo-${system2}`);
	newExchange.style.height = '0';
	newExchange.style.transform = 'translateY(-100px)';
	exchangesWidget.prepend(newExchange);
	const heightEl = newExchange.scrollHeight + 3;
	
	requestAnimationFrame(function() {
		newExchange.classList.add('_new-exchange');
		newExchange.style.height = heightEl + 'px';
		newExchange.style.transform = 'translateY(0px)';
	})
	newExchange.addEventListener('transitionend', () => {
		newExchange.style.height = 'auto';
		newExchange.classList.remove('_new-exchange');
		exchangeToRemove.remove();
	})
	cascadeChildrenOpacity(exchangesWidget, 1.3);
}

const cascadeChildrenOpacity = (node, divider) => {
	let opacity = 1;
	for(let i=0; i< node.children.length; i++){
		node.children[i].style.opacity = opacity;
		opacity/= divider;
	}
}

cascadeChildrenOpacity(exchangesWidget, 1.3);

setTimeout(()=>{
	addWidgetExchange({country: 'ukraine', time: '00:00:00', system1: 'ac', value1: '100.00',
		system2: 'btc', value2: '100.00' });
}, 2000)
