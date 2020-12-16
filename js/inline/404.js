var
    doc = document,
    menu = doc.getElementsByClassName('burger')[0],
    lang_select = doc.getElementsByClassName('language-select')[0];

function menuToggle9() {
    menu.classList.toggle('open')}

function menuToggle() {
    lang_select.classList.toggle('open')}

function menuClose9() {
    menu.classList.remove('open');
}
function menuClose() {
    lang_select.classList.remove('open');
}
function menuCloseClickOutside9(e) {
    if(!e.target.matches('.burger *')){
        menuClose9();
    }
}
function menuCloseClickOutside(e) {
    if(!e.target.matches('.language-select *')){
        menuClose();
    }
}
doc.addEventListener('click', menuCloseClickOutside9);
doc.addEventListener('touchstart', menuCloseClickOutside9);
doc.addEventListener('click', menuCloseClickOutside);
doc.addEventListener('touchstart', menuCloseClickOutside);