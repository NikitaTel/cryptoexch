var
	doc = document,
	win = window,
	body = doc.getElementById('body'),
	menu = doc.getElementsByClassName('burger')[0],
	lang_select = doc.getElementById('full-header-lang'),
	contact_switcher = doc.getElementsByClassName('lk-contact_switcher_label')[0],
	accounts_switcher = doc.getElementsByClassName('your-accounts_switcher_label')[0],
	df_left = doc.getElementsByClassName('doble-form_left')[0],
	df_right = doc.getElementsByClassName('doble-form_right')[0],
	df_left2 = doc.querySelector('#df_left2'),
	df_right2 = doc.getElementById('df_right2'),
	df_left3 = doc.getElementById('df_left3'),
	df_right3 = doc.getElementById('df_right3'),
	button_up = doc.getElementsByClassName('button_up')[0],
	df_left4 = doc.querySelector('#df_left4'),
	df_right4 = doc.querySelector('#df_right4');

// Lang Menu Open/Close
function menuToggle() {
	lang_select.classList.toggle('open');
}
// Shit 228
function menuToggle4() {
	df_left.classList.toggle('open')
}

function menuToggle5() {
	df_right.classList.toggle('open')
}

function menuToggle4l() {
	df_left4.classList.toggle('open')
}

function menuToggle4r() {
	df_right4.classList.toggle('open')
}

function menuToggle6() {
	df_left2.classList.toggle('open')
}

function menuToggle7() {
	df_right2.classList.toggle('open')
}

function menuToggle8() {
	df_left3.classList.toggle('open')
}

function menuToggle9() {
	df_right3.classList.toggle('open')
}

function menuToggle10() {
	menu.classList.toggle('open')
}

function menuClose10() {
	try{
		menu.classList.remove('open');
	}
	catch
	{
	
	}
}

function menuCloseClickOutside10(e) {
	if (!e.target.matches('.burger *')) {
		menuClose10();
	}
}

function menuToggle2() {
	accounts_switcher.classList.toggle('open')
}

function menuToggle3() {
	contact_switcher.classList.toggle('open')
}

function menuClose() {
	lang_select.classList.remove('open');
}

function menuClose2() {
	accounts_switcher.classList.remove('open');
}

function menuClose3() {
	contact_switcher.classList.remove('open');
}

// Lang Menu Close Click Outside
doc.addEventListener('click', menuCloseClickOutside);
doc.addEventListener('touchstart', menuCloseClickOutside);

doc.addEventListener('click', menuCloseClickOutside10);
doc.addEventListener('touchstart', menuCloseClickOutside10);

/***************
 * @Smooth Scrolling
 ***************/
var links = doc.querySelectorAll("[href^='#']");
for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', function (event) {
		event.preventDefault();
		
		// Get id and scrollIt
		var id = this.getAttribute('href');
		scrollIt(doc.querySelector(id));
	});
}
/***** @End *****/


/** @Button Up **/
function scrollFunctions() {
	var
		pageY = win.pageYOffset;
	
	if (pageY > 250) {
		button_up.classList.add('fixed');
	} else {
		button_up.classList.remove('fixed');
	}
}
win.addEventListener('scroll', function () {
	scrollFunctions();
});
win.addEventListener('load', function () {
	scrollFunctions();
	//$("#blockexchange").hide(); //block exchange hide by default
	
	
	
	//setTime('13:10:04')
});
/***** @End *****/

//block exchange timer


function setTime(time) { //вставить время в таймер
	$arr = doc.getElementsByClassName("timer-digit"); //select 6 spans of digits
	$i = 0;
	$TC = 0;
	for ($i; $i <= time.length - 1; $i++) {
		if (isNumeric(time[$i]) && $TC <= 5) { //filling
			$arr[$TC].innerHTML = time[$i];
			$TC++;
		}
		
	}
}

function isNumeric(str) {
	if (typeof str != "string") return false // we only process strings!
	return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
		!isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
//block exchange timer

//feedback stars
function star(q, parent) {
	$arr = $(parent).find('.current');
	$i = 0;
	for ($i; $i <= q - 1; $i++) {
		
		$arr[$i].className = "i-star current active";
		
	}
	$i = q;
	for ($i; $i <= $arr.length - 1; $i++) {
		
		$arr[$i].className = "i-star current";
		
	}
}
//feedback stars

//questions accordion
function accordion(el) {
	
	if (!$(el).find(".accordion-content-active").length) { //если не тыкнули по итак открытому элементу
		$(".accordion-content-active").hide(300); //убрать все открытые
		setTimeout(function () { //таймер выждать пока уберется
			$(".accordion-content-active").addClass("accordion-content"); //добавить обычный класс
			$(".accordion-content-active").removeClass("accordion-content-active"); //убрать класс открытый
		}, 300);
		$(".arrow").css("transform", "none"); //все стрелки в исходное положение
		$(el).find(".accordion-content").fadeIn(500); //найти дитя контент в выбранном элементе и показать
		setTimeout(function () {
			$(el).find(".accordion-content").addClass("accordion-content-active"); //добавить класс открыто
			$(el).find(".accordion-content-active").removeClass("accordion-content"); //убрать класс закрыто
		}, 300);
		$(el).find(".arrow").css("transform", "rotate(180deg)"); //поворот стрелки
	} else {
		$(el).find(".accordion-content-active").hide(300); //если тыкнули по уже открытому аккордиону, спрятать его, обход повторного открытия его же
		$(".arrow").css("transform", "none"); //стрелку в исходное
		$(el).find(".accordion-content-active").addClass("accordion-content"); //классы тут же на место
		$(el).find(".accordion-content-active").removeClass("accordion-content-active");
		
	}
}
//questions accordion
//help messages

setTimeout(function () {
	try {
		$("#helpMsgLeft").fadeOut(700);
		$("#helpMsgRight").fadeOut(700);
	} catch {
	
	}
}, 3000)


//help messages

// check fields & erroring fields
function wrongField(el, release) {
	if (!release) {
		$(el).addClass('wrong-field')
	} else {
		try {
			$(el).removeClass('wrong-field');
		} catch {
		
		}
	}
}

function checkFields(el) {
	$arr = $(el.toString() + " :input");
	$i = 0;
	for ($i; $i <= $arr.length - 1; $i++) {
		if (($($arr[$i]).prop("type") != 'hidden')) {
			
			if ($($arr[$i]).is(":invalid")) {
				wrongField($arr[$i], false);
			} else {
				wrongField($arr[$i], true);
			}
			
		}
	}
}
// check fields & erroring fields
function handleReg() {
	// checkFields('.registration-new');
	
	document.getElementById('registr').checked = false;
	document.getElementById('registr-step3').checked = true;
	
	
}

function checkpass(el, el2) {
	checkFields('.registration-s3');
	if ($(el).val() != $(el2).val()) {
		wrongField(el);
		wrongField(el2);
		$('.registration-s3 .error').html('Пароли не совпадают');
		return false;
	} else {
		
		return true;
	}
}

function handleRegPass() {
	
	
	document.getElementById('registr-step3').checked = false;
	document.getElementById('registr-step2').checked = true;
	
	
	
	
}
$('.MoneyOut').click(function () {
	$('#moneyOut').show();
});
$('.Subscribe').click(function () {
	$('.Subscribe').parents('div').last().hide();
	$('#thanksSubs').show();
});
$('.feedLeave').click(function () {
	//$('.feedLeave').parents('div').last().hide();
	$('#thanksFeed').show();
});

function handleStars() {
	if ($('#s1 .active').length <= 6) {
		$("#f2").show();
		$("#f1").hide();
		
	} else if ($('#s1 .active').length >= 7) {
		$("#f1").show();
		$("#f2").hide();
	}
}

function switchView(parameter) //эта функция меняет  вид в базе знаний
{
	if (parameter == "pan") {
		$arr = $('#Pan .content-text');
		$i = 0;
		for ($i; $i <= $arr.length - 1; $i++) {
			$($arr[$i]).html($($arr[$i]).html().substring(0, 150))
		}
		
		$('#L-inline').hide();
		$('#Pan').show();
		$('.line-img').removeClass('cur');
		$('.pan-img').addClass('cur');
	} else if (parameter == "line") {
		$('#Pan').hide();
		$('#L-inline').show();
		$('.line-img').addClass('cur');
		$('.pan-img').removeClass('cur');
	}
}

const customSelects = document.getElementsByClassName("custom-select");
for(let i=0; i<customSelects.length; i++){
	const customSelect = customSelects[i];
	const items = customSelect.querySelector('.custom-select__items');
	const selectedItem = customSelect.querySelector('.custom-select__selected');
	const originSelect = customSelect.querySelector('select');
	//hide select list
	items.classList.add('select-hide');
	for(let i = 0; i < items.children.length; i++){
		const item = items.children[i];
		//replace selected item and selected option
		item.addEventListener('click', function(e){
			const selectedItems = items.querySelectorAll('.same-as-selected');
			for(let i=0; i < selectedItems.length; i++){
				selectedItems[i].classList.remove('same-as-selected')
			}
			selectedItem.firstElementChild.replaceWith(this.cloneNode(true));
			this.classList.add('same-as-selected');
			originSelect.selectedIndex = i;
			selectedItem.click();
		})
	}
	selectedItem.addEventListener('click', function(e) {
		e.stopPropagation();
		closeAllSelect(this);
		this.nextElementSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(element) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var selects, selectedItems, arrNo = [];
	selects = document.getElementsByClassName("custom-select__items");
	selectedItems = document.getElementsByClassName("custom-select__selected");
	for (let i = 0; i < selectedItems.length; i++) {
		if (element === selectedItems[i]) {
			arrNo.push(i)
		} else {
			selectedItems[i].classList.remove("select-arrow-active");
		}
	}
	for (let i = 0; i < selects.length; i++) {
		if (arrNo.indexOf(i)) {
			selects[i].classList.add("select-hide");
		}
	}
}

document.addEventListener("click",  closeAllSelect);

const swapSystemFields = () => {
	const giveForm =  document.querySelector('#pay-form');
	const receiveForm =  document.querySelector('#receive-form');
	const gS_items = giveForm.querySelector('.system-select .custom-select__items');
	const rS_items = receiveForm.querySelector('.system-select .custom-select__items');
	let i1=0, i2=0;
	for(i1; i1 < gS_items.children.length; i1++){
		if(gS_items.children[i1].classList.contains('same-as-selected')){
			break;
		}
	}
	for(i2;  i2< rS_items.children.length; i2++){
		if(rS_items.children[i2].classList.contains('same-as-selected')){
			break;
		}
	}
	gS_items.children[i2].click();
	rS_items.children[i1].click();
	giveForm.querySelectorAll('input').forEach(el=> {
		if(el.type==='checkbox'){
			el.checked = false;
			return;
		}
		el.value = '';
		el.dispatchEvent(new Event('change'));
	})
	receiveForm.querySelectorAll('input').forEach(el=> {
		if(el.type==='checkbox'){
			el.checked = false;
			return;
		}
		el.value = ''
		el.dispatchEvent(new Event('change'))
	})
}

const formGroups = document.querySelectorAll('.form-group');
formGroups.forEach((fg) => {
	const input = fg.querySelector('input');
	const label = fg.querySelector('label');
	input.addEventListener('input', function(e){
		if(!this.checkValidity()){
			this.classList.add('invalid');
			label.style.display = 'none';
		}
		else {
			if(this.value==='')
				label.style.display = 'block';
			else
				label.style.display = 'none';
			this.classList.remove('invalid');
		}
	})
	input.addEventListener('change', function(e){

		if(this.value===''){
			if(this.checkValidity()){
				this.classList.remove('invalid');
				label.style.display = 'block';
			}else if(this.required){
				label.style.display = 'block';
			}
		}else if(this.checkValidity()){
			this.classList.remove('invalid');
			label.style.display = 'none';
		}else{
			this.classList.add('invalid');
			label.style.display = 'none';
		}
	})
	
	input.dispatchEvent(new Event('change'));
})

function closeAllDropdown(element) {
	const ddowns = document.getElementsByClassName("dropdown-search__items");
	for (let i = 0; i < ddowns.length; i++) {
			if(element && element !== ddowns[i])
				ddowns[i].classList.remove("active");
	}
}

document.addEventListener("click",  closeAllDropdown);

const dropdownSearches = document.getElementsByClassName("dropdown-search");
for(let i=0; i< dropdownSearches.length; i++){
	const dropdownSearch = dropdownSearches[i];
	const items = dropdownSearch.querySelector('.dropdown-search__items');
	const input = dropdownSearch.querySelector('.dropdown-search__selected input');
	input.addEventListener('input', function(){
		const value = this.value.toUpperCase();
		const itemsArr = items.querySelectorAll('.dropdown-search__item');
		let entities = 0;
		for (i = 0; i < itemsArr.length; i++) {
			const txtValue = itemsArr[i].textContent || itemsArr[i].innerText;
			if (txtValue.toUpperCase().indexOf(value) > -1) {
				itemsArr[i].style.display = "";
				entities++;
			} else {
				itemsArr[i].style.display = "none";
			}
		}
		if(entities===0){
			this.setCustomValidity("Invalid field.");
			this.dispatchEvent(new Event('change'));
		}else{
			this.setCustomValidity("");
		}
	});
	input.addEventListener('click', function(e){
		e.stopPropagation();
		items.classList.toggle('active');
		closeAllDropdown(items);
	})
	items.addEventListener('click', function(e){
		e.stopPropagation();
		let item = e.target;
		if(!item.classList.contains('dropdown-search__item')){
			item = item.parentNode;
		}
		input.value = item.innerText;
		input.dispatchEvent(new Event('change'));
		items.classList.toggle('active');
	})
}
