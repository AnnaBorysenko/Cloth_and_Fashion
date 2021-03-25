const menuCls = 'open__menu'
const basketCls = 'open__basket'

$(document).ready(function () {
    const menuBtnsBasket = document.querySelector('.basket__menu-btn');
    const menuBtns = document.querySelector('.menu__btn');
    const menuMask = document.querySelector('.menu-mask');
    const basketMask = document.querySelector('.basket__modal__wrapper');

    menuBtns.onclick = () => openModal(menuCls);
    menuBtnsBasket.onclick = () => openModal(basketCls);
    menuMask.onclick = () => closeModals([menuCls, basketCls]);
    basketMask.onclick = () => closeModals([menuCls, basketCls]);

    function openModal(cls) {
        document.body.classList.add(cls);
    }

    function closeModals(cls) {
        cls.forEach(item => document.body.classList.remove(item));
    }

    $('.header__banner-promo-slider').owlCarousel({
        center: true,
        items: 1,
        margin: 0,
        bots: true
    });

    $('.top-slider').owlCarousel({
        center: true,
        items: 1,
        margin: 0,
    });

    $('.store-slider').owlCarousel({
        stagePadding: 80,
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        dots: false,

        responsive: {
            375:{
                stagePadding: 100,
                center: true,
                items: 1,
                loop: true,
                margin: 10,
                dots: false,
            },
            425:{
                stagePadding: 120,
                center: true,
                items: 1,
                loop: true,
                margin: 10,
                dots: false,
            },
            440:{
                stagePadding: 120,
                center: true,
                items: 1,
                loop: true,
                margin: 10,
                dots: false,
            },
            500:{
                stagePadding: 10,
                center: true,
                items: 3,
                loop: true,
                margin: 10,
                dots: false,
            },
            550:{
                stagePadding: 20,
                center: true,
                items: 3,
                loop: true,
                margin: 10,
                dots: false,
            },
            600:{
                stagePadding: 60,
                center: true,
                items: 4,
                loop: true,
                margin: 10,
                dots: false,
            },
            650:{
                stagePadding: 140,
                center: true,
                items: 4,
                loop: true,
                margin: 10,
                dots: false,
            },
            768: {
                items: 4,
                stagePadding: 60,
                margin: 10,
                center: false,
                nav: true,
            },
            1024: {
                items: 6,
                stagePadding: 0,
                margin: 2,
                center: false,
                nav: true,
                loop: false,
            }
        }
    });

    $('.insta__slider').owlCarousel({
        stagePadding: 80,
        center: true,
        items: 1,
        loop: true,
        margin: 5,
        dots: false,
        responsive: {
            375:{
                stagePadding: 120,
                center: true,
                items: 1,
                loop: true,
                margin: 10,
                dots: false,
            },
            425:{
                stagePadding: 140,
                center: true,
                items: 1,
                loop: true,
                margin: 10,
                dots: false,
            },
            460:{
                stagePadding: 150,
                center: true,
                items: 1,
                loop: true,
                margin: 10,
                dots: false,
            },
            550:{
                stagePadding: 40,
                center: true,
                items: 3,
                loop: true,
                margin: 10,
                dots: false,
            },
            768: {
                items: 5,
                stagePadding: 0,
                margin: 10,
                center: false,
            },
            1024: {
                items: 5,
                stagePadding: 0,
                margin: 10,
                center: false,
                loop: false,
            }
        }
    });

    $('.usa__slider').owlCarousel({
        stagePadding: 80,
        center: true,
        items: 1,
        loop: true,
        margin: 20,
        dots: false,
        responsive: {
            375:{
                stagePadding: 100,
                center: true,
                items: 1,
                loop: true,
                margin: 10,
                dots: false,
            },
            425:{
                stagePadding: 120,
                center: true,
                items: 1,
                loop: true,
                margin: 10,
                dots: false,
            },
            460:{
                stagePadding: 130,
                center: true,
                items: 1,
                loop: true,
                margin: 10,
                dots: false,
            },
            550:{
                stagePadding: 80,
                center: true,
                items: 2,
                loop: true,
                margin: 10,
                dots: false,
            },

            768: {
                items: 4,
                stagePadding: 0,
                margin: 10,
                center: false,
            },
            1024: {
                items: 4,
                stagePadding: 0,
                margin: 10,
                center: false,
                loop: false,
            }
        }
    });
});
