function menuCloseClickOutside(e) {
    if(!e.target.matches('.language-select *')){
        menuClose();
    }
}