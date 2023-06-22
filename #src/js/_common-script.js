function checkBrowser() {
    /* Устанавливает классы для тега html:
     *	._webp - если браузер поддерживает этот формат
     *	._no-webp - если браузер не поддерживает этот формат
     *	._touch - если это тачскрин. 
     *	Добавляет к .wrapper класс _loaded когда дерево DOM построено
    */
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

    function isIE() {
        ua = navigator.userAgent;
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
        return is_ie;
    }
    if (isIE()) {
        document.querySelector('html').classList.add('ie');
    }
    if (isMobile.any()) {
        document.querySelector('html').classList.add('_touch');
    }

    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        if (support === true) {
            document.querySelector('html').classList.add('_webp');
        } else {
            document.querySelector('html').classList.add('_no-webp');
        }
    });
    
    window.addEventListener("load", function () {
        if (document.querySelector('.wrapper')) {
            setTimeout(function () {
                document.querySelector('.wrapper').classList.add('_loaded');
            }, 0);
        }
    });

    let unlock = true;
};
checkBrowser();

//----- bg-img start
function bgimg() {
    /* Устанавливает фоном картинку указанную в теге img 
     * (Дорабтать)
    */
    let bgimg = document.querySelectorAll("._bg-img");
    for (let i = 0; i < bgimg.length; i++) {
        if (bgimg[i].querySelector('img') && bgimg[i].querySelector('img').getAttribute('src') != null) {
            bgimg[i].style.backgroundImage = 'url(' + bgimg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
bgimg();
document.addEventListener('DOMContentLoaded', bgimg, false)
//----- bg-img end