//----- Burger menu start
function menu_burger() {
    let burger = document.querySelector('.burger');
    let main_menu = document.querySelector('.main-menu');
    let li = main_menu.querySelectorAll(' ul > li ');

    burger.addEventListener('click', function(){
        burger.classList.toggle('burger_active');
        main_menu.classList.toggle('main-menu_active');
        body.el.classList.toggle('_lock');
    }, false);

    function close_burger_menu() {
        burger.classList.remove('burger_active');
        main_menu.classList.remove('main-menu_active');
        body.el.classList.remove('_lock');
    }

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', () => {
            close_burger_menu();
        }, false)
    }

};
menu_burger();
//----- Burger menu end