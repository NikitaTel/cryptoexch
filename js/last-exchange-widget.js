const addLastExchange = (exchange) => {
  const exchangeEl = document.querySelector('.recent-exchanges .rc-grid');
  const exchanges = exchangeEl.querySelectorAll(' .rec-changes-line');
  const exchangeToDelete = exchanges[exchanges.length - 1];
  const createExchangeElement = ({country, time, valute1, sum1, valute2, sum2}) => {
    const exchange = document.createElement('div');
    exchange.className = 'rec-changes-line inline line-iter';
    exchange.innerHTML = `<div class="country-logo logo-${country}"></div>
                         <div class="rc-time">
                            <p class="rc-timeval">${time}</p>       
                         </div>
                         <div class="rc-divider"></div>
                         <div class="rc-summ1">
                            <p class="rc-summ1-val">${sum1}</p>
                         </div>
                         <div class="rc-logo1 logo-${valute1}"></div>
                         <div class="next"><div class="i-next"></div> </div>
                        <div class="rc-summ2">
                            <p class="rc-summ2-val">${sum2}</p>
                         </div>
                         <div class="rc-logo2 logo-${valute2}"></div>`
    return exchange;
  }
  const newExchange = createExchangeElement(exchange);
  newExchange.classList.add('new-exchange');
  exchangeEl.prepend(newExchange);
  exchangeToDelete.classList.add('remove-exchange');
  // Here you can add timeout to delete items if they not animated,
  // because items are being animated only when the tab is visible.
  exchangeToDelete.addEventListener('animationend', () => {
    exchangeToDelete.remove();
  })
  newExchange.addEventListener('animationend',
    () => {newExchange.classList.remove('new-exchange')});
  setTimeout(() => {
    if(document.contains(exchangeToDelete)){
      exchangeToDelete.remove();
    }
  }, 2000);
}

setInterval(()=>{
  addLastExchange({country: 'ukraine', time: '00:00:00', valute1: 'ac', sum1: '100.00',
    valute2: 'btc', sum2: '100.00' });
}, 5000)
