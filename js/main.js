
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
    df_left2 = doc.getElementById('df_left2'),
    df_right2 = doc.getElementById('df_right2'),
    df_left3 = doc.getElementById('df_left3'),
    df_right3 = doc.getElementById('df_right3'),
    button_up = doc.getElementsByClassName('button_up')[0];

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


//Widget
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

//Header
const openHeaderMenu = () => {
    const el = document.querySelector('.header-nav');
    el.style.display = 'flex';
}

const closeHeaderMenu = () => {
    const el = document.querySelector('.header-nav');
    el.style.display = 'none';
}

//slider
const showSliderSlide = (sliderSelector, slideSelector, dotSelector) => {
    const slider = document.querySelector(sliderSelector);
    const slides = slider.querySelectorAll(slideSelector);
    const dots = document.querySelectorAll(dotSelector);
    const slidesCnt = slides.length;
    return (slideNum, prevSlide=null) => {
        if(prevSlide===slideNum){
            return ;
        }
        if(prevSlide !== null) {
            slides[prevSlide].style.opacity = '0';
            slides[prevSlide].addEventListener('transitionend', () => {
              slides[prevSlide].style.display = 'none';
              dots[prevSlide].classList.remove('active-slide-dot');
            })
        }
        slideNum %= slidesCnt;
        slides[slideNum].style.display = 'block';
        slides[slideNum].style.opacity = '1';
        dots[slideNum].classList.add('active-slide-dot');
        return slideNum;
    }
}

const nextSliderSlide = (showSlideFunc) =>
  (relativePosition, currPosition) => showSlideFunc(relativePosition+currPosition,currPosition);



let showHeaderSlide = showSliderSlide('.header_all_content_slider-box_wrapper', '.header-news', '.slide-dot');
//let nextHeaderSlide = nextSliderSlide(showHeaderSlide);
let currHeaderSlide = showHeaderSlide(0);

setInterval(()=>{currHeaderSlide = showHeaderSlide(currHeaderSlide + 1, currHeaderSlide)}, 3*1000);

